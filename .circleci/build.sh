#!/bin/bash

set -e

DOCKER_NAMESPACE=${DOCKER_NAMESPACE:-"reactioncommerce/reaction-styleguide"}

cd $BUILD_DIR/reaction

# build new image
docker build -t $DOCKER_NAMESPACE:latest

# run the container and wait for it to boot
docker run --name styleguide -p 3000:3000 -d $DOCKER_NAMESPACE:latest
sleep 30

# use curl to ensure the app returns 200's
docker exec styleguide curl --retry 10 --retry-delay 10 -v http://localhost:3000
