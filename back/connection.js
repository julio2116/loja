const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dc_store', 'root', '1234', {
  host: 'localhost',
  dialect:  'mysql',
  port: 3306
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