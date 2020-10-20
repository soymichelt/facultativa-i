FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

USER node

COPY --chown=node:node . .

ENV PORT=8080

ENV HOST="0.0.0.0"

ENV API_URL="172.19.0.2:8080"

EXPOSE ${PORT}

CMD ["npm", "run", "start:dev"]