FROM node:16-alpine

USER root

ENV NODE_ENV="production"

WORKDIR /usr/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --ignore-scripts

COPY dist dist

CMD [ "npm", "start" ]
