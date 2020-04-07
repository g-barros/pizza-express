const express = require('express');

const rotas = express.Router();

rotas.get('/:nome', (req, res) => {
    let {nome} = req.params;
    res.render('usuario', {nome});
});

module.exports = rotas;