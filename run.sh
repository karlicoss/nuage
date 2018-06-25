#!/bin/bash
docker run \
    -p 7001:8334 \
    -e APPLICATION_URL="https://localhost/nuage" \
    -e DROPBOX_CLIENT_ID="hp9ngggj05tk0k7" \
    -d machines/nuage:latest 
