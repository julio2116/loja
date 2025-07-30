const { DataTypes } = require('sequelize');
const sequelize = require('../connection');

const Address = sequelize.define(
  'Address',
  {}
)

module.exports = Address