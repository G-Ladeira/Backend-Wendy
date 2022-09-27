var express = require('express');
var router = express.Router();
const {sequelize, Produto}= require('../database/models')
const listaProdutos = require('../database/controlers/produtoController')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/produtos',listaProdutos.todos );

module.exports = router;
