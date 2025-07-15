const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.BANCO, process.env.USER, process.env.BANCO_PASSWORD, {
  host: process.env.HOST,
  dialect:  'mysql',
  port: process.env.BANCO_PORT
});


(async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

sequelize.sync()

module.exports = sequelize