#!/usr/bin/env bash

set -euo pipefail

if sed --version >/dev/null 2>&1; then
    # GNU sed
    SED_INPLACE="-i"
else
    # BSD sed
    SED_INPLACE="-i ''"
fi

###

# $1: <repository>, example: "pulumi/crd2pulumi"
github_repo_latest_tag() {
    local repo=$1
    local auth_header=""
    # Try to get GitHub token from gh CLI if it's available
    if command -v gh &>/dev/null; then
        local token=$(gh auth token 2>/dev/null)
        if [ -n "$token" ]; then
            auth_header="Authorization: Bearer ${token}"
        fi
    fi
    local response=$(curl -s -L \
        -H "Accept: application/vnd.github+json" \
        -H "X-GitHub-Api-Version: 2022-11-28" \
        ${auth_header:+-H "$auth_header"} \
        "https://api.github.com/repos/${repo}/tags" \
    )
    local latest_tag=$(echo "$response" | jq -r '.[0].name // empty')
    echo "$latest_tag"
}

# $1: github "org/repo"
# $2: crd files glob
# $3: js package name
function gen() {
    local repo="$1"
    local glob="$2"
    local packname="$3"
    local foldername=${packname//[^a-zA-Z0-9]/-}

    local tag="$(github_repo_latest_tag "$repo")"
    echo "$repo: $tag"
    git clone --depth 1 --branch "$tag" "https://github.com/$repo.git" "tmp/$foldername"

    if [ "$repo" = "envoyproxy/gateway" ]; then
        # Strip Helm templating guards and leading document separators
        for f in $(echo "tmp/$foldername/$glob"); do
            sed $SED_INPLACE '/{{- if .Values.crds.envoyGateway.enabled }}/d;/^{{- end }}$/d;/^---$/d' "$f"
        done
    fi

    crd2pulumi -v "$tag" --nodejsName "$packname" --nodejsPath "gen/$foldername" $(echo "tmp/$foldername/$glob")
    # pre-compile the package: allows removing the postinstall script
    ./node_modules/typescript/bin/tsc -p "./gen/$foldername" || true
    jq 'del(.scripts.postinstall)' "./gen/$foldername/package.json" > temp.json && mv temp.json "./gen/$foldername/package.json"
    rm "./gen/$foldername/scripts/postinstall.js"
    cp "./gen/$foldername/package.json" "./gen/$foldername/bin/package.json"
}

###

if ! command -v crd2pulumi > /dev/null; then
    if [ "$1" = "setup" ]; then
        version="$(github_repo_latest_tag "pulumi/crd2pulumi")"
        curl -sSL "https://github.com/pulumi/crd2pulumi/releases/download/${version}/crd2pulumi-${version}-linux-amd64.tar.gz" -o crd2pulumi.tar.gz
        tar -xf crd2pulumi.tar.gz
        mv crd2pulumi ~/.local/bin
        rm crd2pulumi.tar.gz
    else
        echo "crd2pulumi is required, you can let this script install it for you:\n$0 setup"
        exit 1
    fi
fi

pnpm i
rm -rf tmp gen
mkdir -p tmp gen

gen "cloudnative-pg/cloudnative-pg" "config/crd/bases/*.yaml" "cloudnative-pg"
gen "cloudnative-pg/plugin-barman-cloud" "config/crd/bases/*.yaml" "barman-cloudnative-pg"
gen "rabbitmq/cluster-operator" "config/crd/bases/*.yaml" "rabbitmq-cluster-operator"
gen "rabbitmq/messaging-topology-operator" "config/crd/bases/*.yaml" "rabbitmq-topology-operator"
gen "cert-manager/cert-manager" "deploy/crds/*.yaml" "certmanager"
gen "prometheus-operator/prometheus-operator" "example/prometheus-operator-crd/*.yaml" "prometheus-operator"
gen "authzed/spicedb-operator" "config/crds/*.yaml" "spicedb-operator"
gen "aws/karpenter-provider-aws" "pkg/apis/crds/*.yaml" "karpenter-aws"
gen "actions/actions-runner-controller" "charts/gha-runner-scale-set-controller/crds/*.yaml" "github-actions-scale-set"
gen "envoyproxy/gateway" "charts/gateway-crds-helm/templates/generated/*.yaml" "envoy-proxy"
gen "kubernetes-sigs/gateway-api" "config/crd/standard/*.yaml" "k8s-gateway-api"
