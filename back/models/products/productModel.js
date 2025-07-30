const { DataTypes } = require("sequelize");
const sequelize = require("../../connection");

const Products = sequelize.define("Products", {
    produto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    valor: {
        type: DataTypes.FLOAT(7, 2),
        allowNull: false,
    },
    imagem: {
        type: DataTypes.STRING,
    },
});

Products.associate = (models) => {
    Products.hasMany(models.Collors, {
        foreignKey: "productId",
        as: "collors",
        onDelete: "CASCADE",
    });
};

module.exports = Products;
