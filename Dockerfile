# Stage 0, "build-stage", based on Node.js, to build and compile Angular
FROM node:12.16.1 as build-stage

RUN apt-get update && apt-get install -yq libgconf-2-4
WORKDIR /app


COPY package*.json /app/

RUN npm install


COPY ./ /app/
RUN npm run build -- --output-path=./dist/out 


# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.13.3-alpine


RUN rm -rf /etc/nginx/nginx.conf.default && rm -rf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

#COPY  dist/patientInformationApp/ /usr/share/nginx/html

RUN chgrp -R 0 /var/cache/ /var/log/ /var/run/ && \
    chmod -R g=u /var/cache/ /var/log/ /var/run/

EXPOSE 8080
LABEL io.openshift.expose-services="8080:http"
USER 1001
ENTRYPOINT ["nginx", "-g", "daemon off;"]