const express = require('express');
const app = express();

let port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`<h1>Hello World!</h1>`);
});

app.get('/time', (req, res) => {
    let date = new Date();
    res.send(`<h1>${date}</h1>`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});