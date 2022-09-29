const {sequelize, Usuario}= require('../models/index')


const usuarioController = {
    criar: async(req,res) =>{

        let result = await Usuario.create ({
            nome:req.body.nome,
            email:req.body.email,
            telefone:req.body.telefone,
            senha:req.body.senha
        })
        return res.json(result)
    },
    alterar: async(req,res) =>{

        let result = await Usuario.update ({
            nome:req.body.nome,
            email:req.body.email,
            telefone:req.body.telefone,
            senha:req.body.senha
        })
        return res.json(result)
    }


}

module.exports = usuarioController