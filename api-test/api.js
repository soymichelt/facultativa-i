const express = require('express');
const axios = require('axios');

// Puerto y host
const PORT = 8080;
const HOST = '0.0.0.0';

// App de express
const app = express();
app.get('/personajes', (req, res) => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then((response) => res.json(response.data.results))
    .catch(error => console.log("Hay un error: ", error));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);