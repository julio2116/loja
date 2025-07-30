const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Collors = sequelize.define("Collors", {
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "Products",
            key: "id",
        },
        onDelete: "CASCADE",
    },
});

Collors.associate = (models) => {
    Collors.belongsTo(models.Products, {
        foreignKey: "productId",
        as: "product",
    });
};

module.exports = Collors;
