const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Purchases = sequelize.define(
  'Purchases',
  {}
)

module.exports = Purchases