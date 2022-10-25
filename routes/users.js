var express = require('express');
var router = express.Router();
const usuarioController = require('../database/controlers/usuarioController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/cadastro', usuarioController.criar)
router.post('/login', usuarioController.login)
module.exports = router;
