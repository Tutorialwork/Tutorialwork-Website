FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

ADD . /usr/src/app

RUN npm run build:ssr

CMD [ "npm", "run", "serve:ssr" ]

EXPOSE 4000
