const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Popularity = sequelize.define(
  'Popularity',
  {}
)

module.exports = Popularity