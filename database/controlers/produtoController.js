const listaProdutos = {
    todos:function(req, res, next) {
        res.set('Access-Control-Allow-Origin', '*');

        Produto.findAll().then(result => {
            res.json(result.map(a => a.toJSON()))
        })   
    },
    
}

module.exports = listaProdutos