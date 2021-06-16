#!/usr/bin/env sh

./node_modules/.bin/shadow-cljs release projects
nginx -g "daemon off;"