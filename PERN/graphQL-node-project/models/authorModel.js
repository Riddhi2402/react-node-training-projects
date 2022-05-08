const Sequelize = require('sequelize');
const database = require('../config/database');


const authorSchema = database.define('Authors', {
  name: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
});

module.exports = authorSchema;
