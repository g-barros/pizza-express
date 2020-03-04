const express = require('express');

const rotasUsuario = require('./routes/usuarioRoute');
const rotasCardapio = require('./routes/cardapioRoute');

const app = express();

app.get('/', (req, res) => {
    res.send("Você está no sistema da Pizza Express");
});
app.use('/usuarios', rotasUsuario);
app.use('/cardapio', rotasCardapio);

app.listen(3000, () => console.log("O servidor está operando."));