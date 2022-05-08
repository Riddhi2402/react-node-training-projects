const Sequelize = require('sequelize');

const database = new Sequelize('postgres', 'postgres', 'postgres', {
  host: '127.0.0.1',
  dialect: 'postgres',
});

module.exports = database;
