const Cardapio = require('../models/Cardapio');

const cardapioController = {
    listarCardapio: (req, res) => {
        let listaPizza = Cardapio.listarCardapio();
        res.send(listaPizza);
    }
};

module.exports = cardapioController;