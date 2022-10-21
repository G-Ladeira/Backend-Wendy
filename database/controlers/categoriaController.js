const { sequelize, Produto, Categoria } = require('../models/index')


const categoriaController = {
    index: function (req, res, next) {
        res.set('Access-Control-Allow-Origin', '*');

        Categoria.findAll().then(result => {
            res.json(result.map(a => a.toJSON()))
        })
    },

    listar: function (req, res, next) {
        res.set('Access-Control-Allow-Origin', '*');
        const {id} = req.params;

        Produto.findAll({
            where: {
                categorias_id: id
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
            
            // return res.json(categoria.toJSON())
           
    }

}

module.exports = categoriaController