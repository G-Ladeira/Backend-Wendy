module.exports = (sequelize, DataTypes) => {

    const Endereco = sequelize.define("Endereco", {
        cep: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logradouro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        uf: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
        {
            tableName: 'enderecos',
            timestamps: false
        }



    );

    Endereco.associate = function (modelos) {
        Endereco.belongsTo(modelos.Usuario, {
            foreignKey: "usuarios_id",
            as: "Usuario"
        }
        )
    }

    return Endereco
}