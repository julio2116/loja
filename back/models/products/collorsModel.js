const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Collors = sequelize.define(
  'Collors',
  {}
)

module.exports = Collors