FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

USER node

COPY --chown=node:node . .

ENV PORT=8080

ENV HOST="0.0.0.0"

ENV URL_API="http://ip172-18-0-39-bu74lehqckh0008u2dm0-8000.direct.labs.play-with-docker.com/personajes"

EXPOSE ${PORT}

CMD ["npm", "run", "start:dev"]