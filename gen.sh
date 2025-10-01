#!/usr/bin/env bash

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

# $1: github "org/repo"
# $2: crd files glob
# $3: js package name
function gen() {
    local repo="$1"
    local glob="$2"
    local packname="$3"

    local tag="$(github_repo_latest_tag "$repo")"
    echo "$repo: $tag"
    git clone --depth 1 --branch "$tag" "https://github.com/$repo.git" "tmp/$packname"
    # for envoy-gateway, strip Helm templating guards and leading document separators
    if [ "$packname" = "envoy-proxy" ]; then
        local crd_dir="tmp/$packname/charts/gateway-crds-helm/templates/generated"
        if [ -d "$crd_dir" ]; then
            find "$crd_dir" -type f -name '*.yaml' -print0 | \
              while IFS= read -r -d '' f; do
                if sed --version >/dev/null 2>&1; then
                  sed -i '/{{- if .Values.crds.envoyGateway.enabled }}/d;/^{{- end }}$/d;/^---$/d' "$f"
                else
                  sed -i '' '/{{- if .Values.crds.envoyGateway.enabled }}/d;/^{{- end }}$/d;/^---$/d' "$f"
                fi
              done
        fi
    fi 

    if [ "$packname" = "envoy-gatewayapi" ]; then
        local std_file="tmp/$packname/charts/gateway-crds-helm/templates/standard-gatewayapi-crds.yaml"
        if [ -f "$std_file" ]; then
            if sed --version >/dev/null 2>&1; then
              sed -i '/{{- if and .Values.crds.gatewayAPI.enabled (eq .Values.crds.gatewayAPI.channel "standard") }}/d;/^{{- end }}$/d;/^---$/d' "$std_file"
            else
              sed -i '' '/{{- if and .Values.crds.gatewayAPI.enabled (eq .Values.crds.gatewayAPI.channel "standard") }}/d;/^{{- end }}$/d;/^---$/d' "$std_file"
            fi
        fi
    fi
    crd2pulumi -v "$tag" --nodejsName "$packname" --nodejsPath "gen/$packname" $(echo "tmp/$packname/$glob")
    # pre-compile the package: allows removing the postinstall script
    ./node_modules/typescript/bin/tsc -p "./gen/$packname"
    jq 'del(.scripts.postinstall)' "./gen/$packname/package.json" > temp.json && mv temp.json "./gen/$packname/package.json"
    rm "./gen/$packname/scripts/postinstall.js"
    cp "./gen/$packname/package.json" "./gen/$packname/bin/package.json"
}

gen "cloudnative-pg/cloudnative-pg" "config/crd/bases/*.yaml" "cloudnative-pg"
gen "rabbitmq/cluster-operator" "config/crd/bases/*.yaml" "rabbitmq-cluster-operator"
gen "rabbitmq/messaging-topology-operator" "config/crd/bases/*.yaml" "rabbitmq-topology-operator"
gen "cert-manager/cert-manager" "deploy/crds/*.yaml" "certmanager"
gen "prometheus-operator/prometheus-operator" "example/prometheus-operator-crd/*.yaml" "prometheus-operator"
gen "authzed/spicedb-operator" "config/crds/*.yaml" "spicedb-operator"
gen "aws/karpenter-provider-aws" "pkg/apis/crds/*.yaml" "karpenter-aws"
gen "actions/actions-runner-controller" "charts/gha-runner-scale-set-controller/crds/*.yaml" "github-actions-scale-set"
gen "envoyproxy/gateway" "charts/gateway-crds-helm/templates/generated/*.yaml" "envoy-proxy"
gen "envoyproxy/gateway" "charts/gateway-crds-helm/templates/standard-gatewayapi-crds.yaml" "envoy-gatewayapi"