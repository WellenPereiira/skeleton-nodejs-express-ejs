var express = require('express');
var router = express.Router();

const Autor = require("../models/autor"); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* rota para autores */
router.get("/", async function(req, resp, next){
  const autores = await Autor.selecionar();
  res.json(autores.rows);
})

module.exports = router;
