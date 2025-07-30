const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Collection = sequelize.define(
  'Collection',
  {}
)

module.exports = Collection