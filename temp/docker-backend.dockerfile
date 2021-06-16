FROM nginx:alpine

RUN apk add openjdk8

COPY /docker/nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /projects
WORKDIR /projects

COPY . .
#RUN apt-get update && apt-get install -y iputils-ping
#------------------------- BACKEND ------------------------------


#FROM clojure
#
#RUN mkdir -p /projects
#RUN apt-get update && apt-get install -y iputils-ping
#
#WORKDIR /projects
#
#COPY . .

#CMD ["sh", "-c", "tail -f /dev/null"]
#CMD ["java", "-cp", "target/uber.jar", "clojure.main", "-m", "projects.system"]
#CMD ["bash"]