var express = require('express');
var router = express.Router();
const authBody = require('../middleware/checkToken')
var produtoController = require('../database/controlers/produtoController')


router.get('/todos', produtoController.todos);
router.get('/categorias/:categorias_id',produtoController.produtoCategoria);
router.get('/:id',produtoController.findProduct);



module.exports = router;