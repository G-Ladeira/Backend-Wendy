

module.exports = (sequelize, DataTypes) => {

    const Categoria = sequelize.define("Categoria", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
        {
            tableName: 'categorias',
            timestamps: false
        }
    );

    Categoria.associate = function (modelos) {
        Categoria.hasMany(modelos.Produto,
            {
                foreignKey: "categorias_id",
                as: "produtoCategoria"
            }
        )
    }

    return Categoria
}