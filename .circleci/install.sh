#!/bin/bash

set -x


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
git clone https://github.com/reactioncommerce/reaction.git && cd reaction


# add the styleguide plugin to Reaction
git submodule add -f https://github.com/reactioncommerce/reaction-styleguide.git imports/plugins/custom/styleguide
