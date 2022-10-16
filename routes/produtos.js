var express = require('express');
var router = express.Router();
var produtoController = require('../database/controlers/produtoController')


router.get('/todos',produtoController.todos);
router.get('/categorias/:categorias_id',produtoController.produtoCategoria);
router.get('/:id',produtoController.findProduct);



module.exports = router;