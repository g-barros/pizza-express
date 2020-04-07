const Cardapio = require('../models/Cardapio');

const cardapioController = {
    listarCardapio: (req, res) => {
        let listaDePizza = Cardapio.listarCardapio();
        res.render('cardapio', {listaDePizza});
    },

    formCadastro: (req, res) => {
        res.render('cadastroCardapio');
    },

    salvarCadastro: (req, res) => {
        const {nomePizza, precoPizza} = req.body;
        const [fotoPizza] = req.files;
        
        Cardapio.cadastrarPizza(nomePizza, precoPizza, fotoPizza.filename);

        res.redirect('/cardapio/visualizar');
    },

    apagarPizza: (req, res) => {
        let {posicao} = req.params;
        Cardapio.apagarPizza(posicao);

        res.redirect('/cardapio/visualizar');
    },
    formEditar: (req, res) => {
        let {posicao} = req.params;
        let pizza = Cardapio.buscarPizza(posicao);

        res.render('editar', {pizza, posicao});
    },

    editarPizza: (req, res) => {
        const {nomePizza, precoPizza, posicao} = req.body;
        console.log(req)
        const [fotoPizza] = req.files;

        let pizza = Cardapio.alterarPizza(nomePizza, precoPizza, fotoPizza.filename, posicao);

        res.render('editar', {pizza, posicao, msg:"Pizza alterada com sucesso!"})
    }
};

module.exports = cardapioController;