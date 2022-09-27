const {sequelize, Produto}= require('./models/index')

Produto.findAll().then(result=>{
    console.log(result.map(a =>a.toJSON()))
})