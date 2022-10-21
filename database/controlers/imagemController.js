const { Imagem } = require('../models/index')

const imagemController = {
    imgProduto: async (req, res) => {
        await Imagem.findAll
    }
}