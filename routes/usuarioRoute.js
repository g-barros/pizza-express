const express = require('express');

const rotas = express.Router();

rotas.get('/:nome', (req, res) => {
    let {nome} = req.params;
    res.send(`Seja bem-vindo, ${nome}!`);
});

module.exports = rotas;