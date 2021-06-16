FROM nginx:alpine

RUN mkdir -p /projects
WORKDIR /projects

COPY . .
COPY nginx.conf /etc/nginx/
RUN apk add --update npm
RUN apk add openjdk8
RUN npm install
RUN ./node_modules/.bin/shadow-cljs release projects