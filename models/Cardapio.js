const fs = require('fs');
const path = require('path');

const arquivoCardapio = path.join('cardapio.json');

function listarCardapio() {
    let cardapio = fs.readFileSync(arquivoCardapio, {encoding:"utf-8"});
    
    cardapio = JSON.parse(cardapio);
    
    return cardapio;
}

function cadastrarPizza(nome, preco, nomeImg) {
    let novaPizza = {
        nome,
        preco,
        img:nomeImg
    };
    
    let cardapio = fs.readFileSync(arquivoCardapio, {encoding:"utf-8"});
    
    cardapio = JSON.parse(cardapio);

    cardapio.push(novaPizza);

    return fs.writeFileSync(arquivoCardapio, JSON.stringify(cardapio));
}

function apagarPizza (posicao) {
    let cardapio = fs.readFileSync(arquivoCardapio, {encoding:"utf-8"});
    
    cardapio = JSON.parse(cardapio);

    cardapio.splice(posicao, 1);

    return fs.writeFileSync(arquivoCardapio, JSON.stringify(cardapio));
}

function buscarPizza(posicao) {
    let cardapio = fs.readFileSync(arquivoCardapio, {encoding:"utf-8"});
    
    cardapio = JSON.parse(cardapio);

    return cardapio[posicao];
}

function alterarPizza(nome, preco, nomeImg, posicao) {
    let pizza = {
        nome,
        preco,
        img:nomeImg
    }
    let cardapio = fs.readFileSync(arquivoCardapio, {encoding:"utf-8"});
    
    cardapio = JSON.parse(cardapio);
    cardapio[posicao] = pizza;

    fs.writeFileSync(arquivoCardapio, JSON.stringify(cardapio));

    return pizza;
}

module.exports = {listarCardapio, cadastrarPizza, apagarPizza, buscarPizza, alterarPizza};