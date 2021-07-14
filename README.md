# Projects
Projects is a [Clojure](https://clojure.org/) / [ClojureScript](https://clojurescript.org/) application for keeping track of projects aswell as states. The application can be deployed in docker-compose or k8s.

## Prerequisite
- [Clojure](https://clojure.org/guides/getting_started)
- [npm](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/get-docker/)
- [K8s](https://kubernetes.io/docs/setup/)

## DEV-Setup
Majority of executable tasks is in Makefile. It is important to note that dev environment is useing local PostgreSQL database which needs to be created, see [create_table.sql](sql/create_table.sql)

### Backend
A REST API Backend server is running with [integrant](https://github.com/weavejester/integrant). One can view backend server configurations in [config.edn](config.edn) which include configuration for the server itself and connection with database. In order start the server we first need to start Clojure nREPL:
```console
$ make dev-backend
```
Then reset integrant:
```clojure
user=> (reset)
```
To get an overview of all backend endpoints documentation [swagger](https://swagger.io) go to http://localhost:BACKEND_SYSTEM_PORT/backend/doc.

Note that this app is using [aero](https://github.com/juxt/aero) for handling enironment variables, the default value of BACKEND_SYSTEM_PORT is port number 1000. Modifiy it if port number 1000 is occupied in [config.edn](config.edn). Same procedure should be done with the connection to PostgreSQL database.

### Frontend
Frontend is running on [shadow-cljs](https://shadow-cljs.github.io/docs/UsersGuide.html) with is a NodeJS package. To fetch all necessary NodeJS packages run:
```console
$ make npm-setup
```
To start the frontend run:
```console
$ make dev-frontend
```
Frontend dev mode will start watch process which will monitor your source files and re-compile them automatically. Web app can be viewed at http://localhost:4200. 

## Release
This project is using Docker-Compose and/or Kubernetes to start the application i.e. frontend, backend and database. Before running the add we need to compile the app by:
```console
$ make app-release
```
In case of environment naming conflict edit them in [config.edn](config.edn) (backend) and [cljs-config.edn](cljs-config.edn) (frontend) files.
### Docker
After the compilation of frontend and backend run:
```console
$ docker-compose up --build
```
To view the app go to http://localhost:8080. One can view environment variable for docker-compose in [.env](.env) file.
Backend API documentation can be accessed at http://localhost:BACKEND_SYSTEM_PORT/backend/doc/, for example http://localhost:3000/backend/doc/. 
### Kubernetes
The easiest way to setup the app in k8s is to run a local kubernetes i.e. [minikube](https://minikube.sigs.k8s.io/docs/start/). 
```console
$ minikube start
```
This app is using Ingress networking for managing external access to the services in a cluster, we need to enable it by:
```console
$ minikube addons enable ingress
```
To start the app run:
```console
$ kubectl apply -f k8s_projects.yaml
```
The app will run inside the minikube, in order to access it well need minikube IP by:
```console
$ minikube ip
```
Usually the IP is 172.17.0.3, however it may vary. If the minikube IP not the same as mentioned one needs to edit [k8s_projects.yaml](k8s_projects.yaml) under ConfigMap keys DB_HOST and BACKEND_HOST to your minikube IP address. 
To view the app go to http://MINIKUBE_IP, example http://172.17.0.3

Backend API documentation can be accessed at http://MINIKUBE_IP/backend/doc/, for example http://172.17.0.3/backend/doc/. 
