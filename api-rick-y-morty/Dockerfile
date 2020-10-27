#Versión a usar de NodeJS. Esta es otra imagen de Docker
FROM node:12

# Crear un directorio para la aplicación
WORKDIR /usr/src/app

#Copiamos los archivos que manejan las dependencias
COPY package*.json ./

#Instalamos los paquetes
RUN npm install

# Copiamos los archivos de nuestra app
COPY . .

ENV PORT=8080

ENV HOST="0.0.0.0"

ENV URL_API="https://rickandmortyapi.com/api/character/"

#Exponemos el puerto 8080
EXPOSE 8080

#Lanzamos la API
CMD [ "node", "api.js" ]