const express = require('express');
const server = express();
const usuarios = require('./src/data/dados.json')
const cors = require('cors');

server.get("/", cors(), (req, res) => {
    return res.json({mensagem: "Nossa api está ok"})
})

server.get("/usuarios",cors(), (req, res,) => {
    return res.json(usuarios)
})

server.listen(3000, () => {
    console.log('OK');
});
