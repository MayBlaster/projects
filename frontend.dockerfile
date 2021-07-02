FROM nginx:alpine

RUN mkdir -p /projects
WORKDIR /projects
RUN mkdir -p /projects/src/cljs && \
    mkdir -p /projects/resources/public/css



COPY yarn.lock tailwind.config.js start.sh shadow-cljs.edn package.json package-lock.json cljs-config.edn ./ 
COPY nginx.conf /etc/nginx/
ADD src/cljs /projects/src/cljs
COPY resources/public/index.html resources/public/index.html

RUN apk add --update npm && \
    npm install shadow-cljs && \
    npm install react react-dom react-refresh tailwindcss && \
    npx tailwind build src/cljs/tailwind.css -o resources/public/css/main.css && \
    chmod -R a+rwx start.sh