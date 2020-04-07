const express = require('express');
const cardapioController = require('../controllers/cardapioController');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('public', 'img'))
    },
    filename: function (req, file, cb) {
        let nomeImg = Date.now() + '-' + req.body.nomePizza.replace(/\s/g,'') + path.extname(file.originalname)
      cb(null, nomeImg)
    }
  })
   
const upload = multer({ storage: storage })
  

const rotas = express.Router();

//read
rotas.get('/visualizar', cardapioController.listarCardapio);
//create
rotas.get('/cadastrar', cardapioController.formCadastro);
rotas.post('/cadastrar', upload.any(), cardapioController.salvarCadastro);
//delete
rotas.delete('/apagar/:posicao', cardapioController.apagarPizza);
//editar
rotas.get('/editar/:posicao', cardapioController.formEditar);
rotas.put('/editar/', upload.any(), cardapioController.editarPizza);



module.exports = rotas;