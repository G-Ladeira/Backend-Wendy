var express = require('express');
var router = express.Router();
const categoriaController = require('../database/controlers/categoriaController')


router.get('/',categoriaController.index)
router.get('/:id/produtos',categoriaController.listar)

module.exports = router;