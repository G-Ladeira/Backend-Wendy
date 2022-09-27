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

    return Imagem
}