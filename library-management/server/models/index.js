const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');

//database connection
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

//book model
db.books = require('./book.model.js')(mongoose);

//user model
db.users = require('./user.model.js')(mongoose, mongoosastic);

module.exports = db;
