const express = require('express');
const methodOverride = require('method-override');

const rotasUsuario = require('./routes/usuarioRoute');
const rotasCardapio = require('./routes/cardapioRoute');
const rotasIndex = require('./routes/indexRoute');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(methodOverride('_method'));

app.use(express.urlencoded({extended: true}));

app.use(rotasIndex);
app.use('/usuarios', rotasUsuario);
app.use('/cardapio', rotasCardapio);

app.listen(3000, () => console.log("O servidor está operando."));