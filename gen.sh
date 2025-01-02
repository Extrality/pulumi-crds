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

rm -rf tmp gen
mkdir -p tmp gen

CNPG_TAG="$(github_repo_latest_tag "cloudnative-pg/cloudnative-pg")"
echo "${CNPG_TAG=}"
git clone --depth 1 --branch "$CNPG_TAG" https://github.com/cloudnative-pg/cloudnative-pg.git tmp/cnpg
crd2pulumi -v "$CNPG_TAG" --nodejsName cloudnative-pg --nodejsPath gen/cloudnative-pg tmp/cnpg/config/crd/bases/*.yaml

RABBIT_TAG="$(github_repo_latest_tag "rabbitmq/cluster-operator")"
echo "${RABBIT_TAG=}"
git clone --depth 1 --branch "$RABBIT_TAG" https://github.com/rabbitmq/cluster-operator.git tmp/rabbitmq-operator
crd2pulumi -v "$RABBIT_TAG" --nodejsName rabbitmq-operator --nodejsPath gen/rabbitmq-operator tmp/rabbitmq-operator/config/crd/bases/*.yaml

CERTMAN_TAG="$(github_repo_latest_tag "cert-manager/cert-manager")"
echo "${CERTMAN_TAG=}"
git clone --depth 1 --branch "$CERTMAN_TAG" https://github.com/cert-manager/cert-manager.git tmp/certmanager
crd2pulumi -v "$CERTMAN_TAG" --nodejsName certmanager --nodejsPath gen/certmanager tmp/certmanager/deploy/crds/*.yaml
