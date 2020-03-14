# Use an official nginx as a parent image
FROM nginx:1.17.0-alpine

WORKDIR /usr/share/nginx/html

COPY ./dist/kanelu-web ./
