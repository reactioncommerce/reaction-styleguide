#!/bin/bash

set -x


# install Docker client
DOCKER_VERSION="17.03.1-ce"
curl -L -o /tmp/docker-$DOCKER_VERSION.tgz https://get.docker.com/builds/Linux/x86_64/docker-$DOCKER_VERSION.tgz
tar -xz -C /tmp -f /tmp/docker-$DOCKER_VERSION.tgz
mv /tmp/docker/* /usr/bin
docker -v


# install Reaction CLI
yarn global add reaction-cli

# install Reaction
reaction init && cd reaction

# add the styleguide plugin to Reaction
git submodule add -f git@github.com:reactioncommerce/reaction-styleguide.git imports/plugins/custom/styleguide
