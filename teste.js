const fs = require('fs');

let conteudo = fs.readFileSync('texto.json', {encoding: 'utf-8'});

console.log(JSON.parse(conteudo));