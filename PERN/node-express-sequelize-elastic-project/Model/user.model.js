const Sequelize = require('sequelize');
const database = require('../Config/db.config');

const User = database.define('UserData', {
  file: {
    type: Sequelize.JSONB,
  },
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  description:{
    type: Sequelize.STRING,
  }
});

module.exports = User;