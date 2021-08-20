FROM node:16-alpine3.14

EXPOSE 3000

RUN apk add --update tini

# Create app directory
WORKDIR /usr/src/app

COPY package.json package.json

RUN npm install && npm cache clean --force

COPY . .

CMD [ "node", "app.js" ]