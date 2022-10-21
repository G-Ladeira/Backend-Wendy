module.exports = (sequelize, DataTypes) => {

    const Produto = sequelize.define("Produto", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },

        tamanho: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        preco: {
            type: DataTypes.FLOAT,
            allowNull: false
        },

        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },

        colecao: {
            type: DataTypes.STRING,
            allowNull: false
        },

        categorias_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },
        {
            tableName: 'Produtos',
            timestamps: false
        });

    Produto.associate = function (modelos) {
        Produto.belongsTo(modelos.Categoria,
            {
                foreignKey: "categorias_id",
                as: "categoria-produto"
            }
        )
    }

    Produto.associate = function (modelos) {
        Produto.hasMany(modelos.Imagem,
            {
                foreignKey: "produtos_id",
                as: "produtoImagem"
            }
        )
    }


    return Produto
}