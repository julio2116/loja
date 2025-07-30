const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Category = sequelize.define(
  'Category',
  {}
)

module.exports = Category