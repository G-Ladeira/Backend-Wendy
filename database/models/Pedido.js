module.exports = (sequelize, DataTypes) => {

    const Pedido = sequelize.define("Pedido", {
    },
        {
            tableName: 'pedidos',
            timestamps: false
        });

    return Pedido
}