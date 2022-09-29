const { sequelize, Produto, Categoria } = require('../models/index')


const produtoController = {
    todos: function (req, res, next) {
        res.set('Access-Control-Allow-Origin', '*');

        Produto.findAll().then(result => {
            res.json(result.map(a => a.toJSON()))
        })
    },

    produtoCategoria: function (req, res, next) {
        res.set('Access-Control-Allow-Origin', '*');

        Produto.findAll({
            include: {
                model: Categoria,
                as: "categoria-produto",
                categorias_id: req.params,
                required:true

            }
        })
            .then(result => {
                res.json(result.map(a => a.toJSON()))
            })
    }

}

module.exports = produtoController