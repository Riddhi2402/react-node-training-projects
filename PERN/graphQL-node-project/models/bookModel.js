const Sequelize = require('sequelize');
const database = require('../config/database');

const bookSchema = database.define('books', {
  name: {
    type: Sequelize.STRING,
  },
  genre: {
    type: Sequelize.STRING,
  },
  authorId: {
    type: Sequelize.INTEGER,
  },
});

module.exports = bookSchema;
