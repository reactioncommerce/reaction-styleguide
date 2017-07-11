#!/bin/bash

set -e

DOCKER_NAMESPACE=${DOCKER_NAMESPACE:-"reactioncommerce/reaction-styleguide"}

cd $BUILD_DIR/reaction

# build new image
docker build --build-arg TOOL_NODE_FLAGS="--max-old-space-size=4096" -t reactioncommerce/reaction-styleguide:latest .

# run the container and wait for it to boot
docker-compose -f ./imports/plugins/custom/styleguide/.circleci/docker-compose.yml up -d
sleep 30

# use curl to ensure the app returns 200's
docker exec styleguide bash -c "apt-get update && apt-get install -y curl && \
  curl --retry 10 --retry-delay 10 -v http://localhost:3000"

# now change the image tag to the configured name
docker tag reactioncommerce/reaction-styleguide:latest $DOCKER_NAMESPACE:latest
