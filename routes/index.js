var express = require('express');
var router = express.Router();
const Autor = require("../models/autor"); 

/* rota para autores */
router.get('/', async function(req, res, next){
  const autores = await Autor.selecionar();
  res.json(autores.rows);
});

router.get('/atualizar', async function(req, res, next){
  const autor = {nome:"Vilma", sobrenome:"Domingos", data_de_nascimento:"1967/02/19", id:"1"}
  const autores = await Autor.atualizar(autor);
  res.json(autores.rows);
});

router.get('/deletar', async function(req, res, next){
  const autor = {id:"1"}
  const autores = await Autor.deletar(autor);
  res.json(autores.rows);
});

router.post('/inserir', async function(req, res, next){
  const autores = await Autor.inserir(req.body);
  res.json(autores.rows);
});
module.exports = router;
