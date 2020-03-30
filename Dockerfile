FROM nginx:1.13.3-alpine

RUN rm -rf /etc/nginx/nginx.conf.default && rm -rf /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY  dist/patientInformationApp/ /usr/share/nginx/html

RUN chgrp -R 0 /var/cache/ /var/log/ /var/run/ && \
    chmod -R g=u /var/cache/ /var/log/ /var/run/

EXPOSE 8080

LABEL io.openshift.expose-services="8080:http"

USER 1001
ENTRYPOINT ["nginx", "-g", "daemon off;"]
