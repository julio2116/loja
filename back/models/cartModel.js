const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Cart = sequelize.define(
  'Cart',
  {}
)

module.exports = Cart