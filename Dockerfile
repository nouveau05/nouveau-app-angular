FROM node:18-alpine3.15 AS build
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install
COPY . .


FROM nginx:1.18.0-alpine

COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /usr/src/app/nginx /opt/nginx
COPY --from=build /usr/src/app/dist/nouveau-venture /usr/share/nginx/html

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]