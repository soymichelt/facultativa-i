const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Puerto y host
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';
const URL_API = process.env.URL_API || 'https://rickandmortyapi.com/api/character/';

// App de express
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    axios.get(`${URL_API}`)
    .then((response) => {
        console.log("AXIOS: ", response.data);
        res.set('Content-type', 'text/html');
        res.send(html(response.data));
    })
    .catch(error => console.log("Hay un error: ", error));
});

function html(listData) {
    return (`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Mi Sitio Web</title>
                <style>
                    body {
                        background-color: #8f57fd;
                    }
                    .characters-list {
                        width: 100%;
                        min-height: calc(100vh + 120px);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .character {
                        margin-top: 1rem;
                        width: 500px;
                        background-color: #fff;
                        border-radius: .5rem;
                        box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
                                    0px 3px 3px 0px rgba(0,0,0,0.14),
                                    0px 4px 6px 0px rgba(0,0,0,0.12);
                    }
                    
                    .character .character-header {
                        padding: 8px;
                    }
                    .character .character-header h1 {
                        margin: 0px;
                        padding: 0px;
                        font-size: 1rem;
                        font-family: Arial, Helvetica, sans-serif;
                    }
                    .character .character-header p {
                        margin: 0px;
                        padding: 0px;
                        font-size: 12px;
                        font-family: Arial, Helvetica, sans-serif;
                    }
                    .character-resource {
                        width: 100%;
                        height: 350px;
                    }
                    .character-resource img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        background: #eee;
                        border-radius: 0 0 .5rem .5rem;
                    }
                </style>
            </head>
            <body>
                <section class='characters-list'>
                    ${htmlList(listData)}
                </section>
            </body>
        </html>
    `);
};

function htmlList (listData) {
    let htmlListText = '';
    if(listData) {
        listData.forEach(item => {
            htmlListText = htmlListText + `
                <article class='character'>
                    <header class='character-header'>
                        <h1>${item.name}</h1>
                        <p>${item.species}</p>
                    </header>
                    <section class='character-resource'>
                        <img src="${item.image}" />
                    </section>
                </article>
            `;
        });
    }
    return htmlListText;
};

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT} with URL API=${URL_API}`);