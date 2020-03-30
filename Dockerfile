FROM node:12.16-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM nginx:1.13.12-alpine

RUN rm -rf /etc/nginx/nginx.conf.default && rm -rf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=node /usr/src/app/dist/* /usr/share/nginx/html

RUN chgrp -R 0 /var/cache/ /var/log/ /var/run/ /usr/share/nginx/html && \
    chmod -R g=u /var/cache/ /var/log/ /var/run/ /usr/share/nginx/html

EXPOSE 8080

LABEL io.openshift.expose-services="8080:http"

USER 1001
ENTRYPOINT ["nginx", "-g", "daemon off;"]
