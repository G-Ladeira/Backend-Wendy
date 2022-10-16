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

        const categoria = Categoria.findOne({
            where:{
                id: id
            },
            include: {
                model: Produto,
                as: "produtoCategoria",
                required:true

            }
        }).then(result=> {return res.json(result.toJSON())} )
            
            // return res.json(categoria.toJSON())
           
    }

}

module.exports = categoriaController