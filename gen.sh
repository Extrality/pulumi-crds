#!/usr/bin/env bash

CNPG_TAG="v1.24.1"
RABBIT_TAG="v2.11.0"
CERTMAN_TAG="v1.16.2"

if ! command -v crd2pulumi > /dev/null; then
    if [ "$1" = "setup" ]; then
        version="v1.5.4"
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
mkdir tmp gen

git clone --depth 1 --branch "$CNPG_TAG" https://github.com/cloudnative-pg/cloudnative-pg.git tmp/cnpg
crd2pulumi -v "$CNPG_TAG" --nodejsName crds/cloudnative-pg --nodejsPath gen/cloudnative-pg tmp/cnpg/config/crd/bases/*.yaml

git clone --depth 1 --branch "$RABBIT_TAG" https://github.com/rabbitmq/cluster-operator.git tmp/rabbitmq-operator
crd2pulumi -v "$RABBIT_TAG" --nodejsName crds/rabbitmq-operator --nodejsPath gen/rabbitmq-operator tmp/rabbitmq-operator/config/crd/bases/*.yaml

git clone --depth 1 --branch "$CERTMAN_TAG" https://github.com/cert-manager/cert-manager.git tmp/certmanager
crd2pulumi -v "$CERTMAN_TAG" --nodejsName crds/certmanager --nodejsPath gen/certmanager tmp/certmanager/deploy/crds/*.yaml
