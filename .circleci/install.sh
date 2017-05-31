#!/bin/bash

set -x

# install git
apt-get update
apt-get install -y git


# install Docker client
curl -L -o /tmp/docker-$DOCKER_VERSION.tgz https://get.docker.com/builds/Linux/x86_64/docker-$DOCKER_VERSION.tgz
tar -xz -C /tmp -f /tmp/docker-$DOCKER_VERSION.tgz
mv /tmp/docker/* /usr/bin
docker -v


# install Reaction CLI
yarn global add reaction-cli


# install Reaction
mkdir -p $BUILD_DIR
cd $BUILD_DIR
git clone git@github.com:reactioncommerce/reaction && cd reaction


# add the styleguide plugin to Reaction
git submodule add -f git@github.com:reactioncommerce/reaction-styleguide.git imports/plugins/custom/styleguide
