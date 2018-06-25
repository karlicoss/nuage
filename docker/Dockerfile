FROM alpine:latest
MAINTAINER mickael.kerjean@gmail.com

COPY . /app
WORKDIR "/app"
 
RUN apk add --no-cache nodejs libcurl && \
    # Nodegit
    apk --no-cache add --virtual .build-deps g++ libressl-dev make python curl-dev && \
    BUILD_ONLY=true npm install nodegit > /dev/null && \
    apk del .build-deps && \
    ( npm install || npm install || npm install || npm install || npm install ) && \
    # PRODUCTION BUILD
    NODE_ENV=production npm run build && \
    npm prune --production

EXPOSE 8334
ENV NODE_ENV production
CMD ["node", "/app/server/index"]
