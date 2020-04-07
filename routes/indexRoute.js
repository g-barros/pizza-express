const express = require('express');

const rotas = express.Router();

rotas.get('/', (req, res)=>{
    res.render('index');
});

module.exports = rotas;