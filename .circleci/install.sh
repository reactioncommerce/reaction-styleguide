#!/bin/bash

set -x


# install Docker client
curl -L -o /tmp/docker-$DOCKER_VERSION.tgz https://get.docker.com/builds/Linux/x86_64/docker-$DOCKER_VERSION.tgz
tar -xz -C /tmp -f /tmp/docker-$DOCKER_VERSION.tgz
mv /tmp/docker/* /usr/bin
docker -v


# install Docker Compose
curl -L https://github.com/docker/compose/releases/download/$DOCKER_COMPOSE_VERSION/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
chmod +x /usr/local/bin/docker-compose


# install Reaction
mkdir -p $BUILD_DIR
cd $BUILD_DIR
git clone https://github.com/reactioncommerce/reaction.git && cd reaction


# add the styleguide plugin to Reaction
git submodule add -f https://github.com/reactioncommerce/reaction-styleguide.git imports/plugins/custom/styleguide
