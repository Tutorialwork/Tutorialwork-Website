FROM nginx:1.21.6-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY /dist/tutorialwork-website /usr/share/nginx/html

RUN chmod 777 -R /usr/share/nginx/html
