const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Sales = sequelize.define(
  'Sales',
  {}
)

module.exports = Sales