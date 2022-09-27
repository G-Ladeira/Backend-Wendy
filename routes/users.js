var express = require('express');
var router = express.Router();
const usuarioController = require('../database/controlers/usuarioController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/login', usuarioController.criar)
module.exports = router;
