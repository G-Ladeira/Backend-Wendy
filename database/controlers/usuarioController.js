const {sequelize, Usuario}= require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const usuarioController = {
    criar: async(req,res) =>{
        const {nome, email, senha, telefone} = req.body
        console.log(email)
        if(!nome) {
            return res.status(422).json({msg:"O nome é obrigatório"})
        }
        if(!email) {
            return res.status(422).json({msg:"O email é obrigatório"})
        }
        if(!telefone) {
            return res.status(422).json({msg:"O telefone é obrigatório"})
        }
        if(!senha) {
            return res.status(422).json({msg:"A senha é obrigatória"})
        }

        // Check if user exists
        const userExists = await Usuario.findOne({where:{email:email},raw:true})

        
        if (userExists) {
            return res.status(422).json({msg: 'Email já está em uso'})
        }

        //Encrypt Password
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(senha, salt)

        //create user

        try{
            let result = await Usuario.create ({
            
                nome:nome,
                email:email,
                telefone:telefone,
                senha:passwordHash
                
            })
            res.status(201).json({msg: 'usuario cadastrado'})
        }catch(error) {
            res.status(500).json({msg: error})
        }
        // return res.json(result)
    },
    alterar: async(req,res) =>{
        res.set('Access-Control-Allow-Origin', '*');
        let result = await Usuario.update ({
            nome:req.body.nome,
            email:req.body.email,
            telefone:req.body.telefone,
            senha:req.body.senha
        })
        return res.json(result)
    },
    login: async(req,res) =>{
        const {email, senha} = req.body

        const userExists = await Usuario.findOne({where:{email:email},raw:true})
        console.log(userExists)
        if (!userExists) {
            return res.status(422).json({msg: 'Usuario não cadastrado'})
        }
        const checkPassword = await bcrypt.compare(senha, userExists.senha)
        
        if (!checkPassword) {
            return res.status(422).json({ msg: 'Senha inválida'})
        }
        
            const token = jwt.sign(
              {
                id: userExists.id,
              },
              "XABLAU"
            );

        return res.status(200).json({msg: 'Usuario Logado', token})

    }


}

module.exports = usuarioController