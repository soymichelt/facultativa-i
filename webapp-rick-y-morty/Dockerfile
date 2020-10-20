FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

USER node

COPY --chown=node:node . .

ENV PORT=8080

ENV HOST="0.0.0.0"

ENV URL_API

EXPOSE ${PORT}

CMD ["npm", "run", "start:dev"]