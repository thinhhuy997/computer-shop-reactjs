# Fetching the latest node image on alpine linux
# FROM node:18-alpine

# Setting up the work directory
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# Starting our application
# CMD npm start

FROM nginx:1.23.3
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY ./build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]

# Using for build the django app image
# docker build -t computer-shop-drf .
# docker run -it -p 8001:8000 computer-shop-drf
# docker run -d -p 27019:27017 --name computer-shop-mongo mongo:latest

# Using for build the reactjs image
# docker build -t computer-shop-reactjs .

# nginx build
# docker build -t computer-shop-reactjs-nginx:1.0 .

# network - computer-show-network
# docker network create computer-shop-network
# docker run -dp 8001:8000 --network computer-shop-network --network-alias computer-shop-drf computer-shop-drf
# docker run -dp 27019:27017 --network computer-shop-network --network-alias computer-shop-mongo mongo:latest
# docker run -dp 3000:80 --network computer-shop-network --network-alias computer-shop-reactjs-nginx computer-shop-reactjs-nginx:1.0