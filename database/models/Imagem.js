module.exports = (sequelize, DataTypes) => {

    const Imagem = sequelize.define("Imagem", {
        nome:{
            type: DataTypes.STRING,
            allowNull: false
        },
        produtos_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        }

    },
        {
            tableName: 'imagens',
            timestamps: false
        }
        
        
        
        );
        Imagem.associate = function (modelos) {
            Imagem.belongsTo(modelos.Produto, {
                foreignKey: "produtos_id",
                as: "imagemProduto"
            }
            )
        }

    return Imagem
}