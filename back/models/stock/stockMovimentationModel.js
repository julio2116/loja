const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const StockMovimentation = sequelize.define(
  'StockMovimentation',
  {}
)

module.exports = StockMovimentation