module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define("Usuario", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
        {
            tableName: 'usuarios',
            timestamps: false
        }
    );

    Usuario.associate = function (modelos) {
        Usuario.hasMany(modelos.Endereco,
            {
                foreignKey: "usuarios_id",
                as: "endereco"
            }
        )
    }

    return Usuario
}