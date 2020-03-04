const express = require('express');
const cardapioController = require('../controllers/cardapioController');

const rotas = express.Router();

rotas.get('/cadastrar/:pizza/:preco', (req, res) => {
    res.send("Cadastrou pizza com sucesso.");
    // let {pizza, preco} = req.params;
    // res.send(`Você cadastrou a ${pizza} com o preço R$${preco}`);
});

rotas.get('/visualizar', cardapioController.listarCardapio);

module.exports = rotas;