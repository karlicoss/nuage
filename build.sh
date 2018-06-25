#!/bin/bash
set -ux
git clean -ifxd

TAG="$(git rev-parse --abbrev-ref HEAD)"
IMAGE="nuage:$TAG"

docker build -t "$IMAGE" -f docker/Dockerfile .
docker save -o "$IMAGE.tar" "$IMAGE"
xz <"$IMAGE.tar" >"$IMAGE.tar.xz"


# on remove machine:
# TODO copy
# unxz <nuage:v0.2.1-glumov.tar.xz >nuage:v0.2.1-glumov.tar
##  docker image import nuage:v0.2.1-glumov.tar nuage:v0.2.1-glumov
# ugh not sure why, instead 
# docker image load -i nuage:v0.2.1-glumov.tar
# then, run.sh #TODO fix tag there

# ok that seems to work...
