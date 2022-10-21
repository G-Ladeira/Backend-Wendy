
const { sequelize, Produto, Categoria, Imagem } = require('../models/index')


const produtoController = {
    todos: function (req, res) {
        res.set('Access-Control-Allow-Origin', '*');

        Produto.findAll({
            include: ["produtoImagem"]
        }).then(result => {
            res.json(result.map(a => a.toJSON()))
        })
    },

    produtoCategoria: function (req, res) {
        res.set('Access-Control-Allow-Origin', '*');

        Produto.findAll({
            where: {
                categorias_id: req.params
            },
            // include: {
            //     model: Categoria,
            //     as: "categoria-produto",
            //     categorias_id: req.params,
            //     required: true

            // },
            include: ["produtoImagem"]
        })
            .then(result => {
                res.json(result.map(a => a.toJSON()))
            })
    },

    findProduct: function (req, res) {
        res.set('Access-Control-Allow-Origin', '*');

       Produto.findOne({
            where: {
                id: req.params.id
            },
            include: ["produtoImagem"]
        }).then(result => {
            res.json(result.toJSON())
        })
    }



}

module.exports = produtoController