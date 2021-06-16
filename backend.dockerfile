FROM alpine

RUN apk add openjdk8 \  
    && mkdir -p /projects

WORKDIR /projects

COPY /target/uber.jar .
COPY config.edn .
