#! /usr/bin/env sh

apk add --update npm
apk add openjdk8
npm install
./node_modules/.bin/shadow-cljs release projects
nginx -g "daemon off;"
