
const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const GENERATE_CLIENTS = require('./models/clients');

let CLIENTS = [];

app.listen(4000, () => {
    console.log('Listen in 4000 port');
    CLIENTS = GENERATE_CLIENTS;
});

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/clients', (req, res) => {
    res.json(CLIENTS);
});

app.get('/clients/:id', (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    if (!id) {
        res.send('ID NO VALIDO');
    }
    const obj = CLIENTS.find(client => client.id === id);
    if (!obj) {
        res.send('CLIENTE NO ENCONTRADO');
    }
    res.json(obj);
});