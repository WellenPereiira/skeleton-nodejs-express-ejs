var express = require('express');
var router = express.Router();
const Autor = require("../models/autor"); 

/* rota para autores */
router.get('/', async function(req, res, next){
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.get('/', async function(req, res, next){
  const autores = await Autor.atualizar(data, id);
  res.json(autores.rows);
});

router.get('/', async function(req, res, next){
  const autores = await Autor.deletar(data, id);
  res.json(autores.rows);
});

router.get('/', async function(req, res, next){
  const autores = await Autor.inserir();
  res.json(autores.rows);
});
module.exports = router;
