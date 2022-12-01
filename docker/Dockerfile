# Based on: https://wkrzywiec.medium.com/build-and-run-angular-application-in-a-docker-container-b65dbbc50be8
FROM nginx:1.17.1-alpine
COPY ./docker/nginx.conf /etc/nginx/nginx.conf
COPY ./dist/test /usr/share/nginx/html
EXPOSE 80
