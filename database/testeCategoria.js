const {sequelize, Categoria}= require('./models/index')

Categoria.findAll().then(result=>{
    console.log(result.map(a =>a.toJSON()))
})

//     Categoria.findByPk(3).then(result=>{
//     console.log(result.toJSON())
//     }
  
// )

// async function buscaAlunos(){
//     const al = await Aluno.findAll()
//     console.log(al.toJSON())
// }
// buscaAlunos()