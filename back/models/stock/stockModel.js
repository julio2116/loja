const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Stock = sequelize.define(
  'Stock',
  {}
)

module.exports = Stock