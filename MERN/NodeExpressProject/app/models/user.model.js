//const library = require('../Util/library');
//const mongoose = library.mongoose;

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;

//Defining Schema
let UserSchema = new Schema({
  username: String,
  password: String,
});

//Add Plugin for pagination
UserSchema.plugin(mongoosePaginate);

const userModel = mongoose.model('users', UserSchema);

module.exports = userModel;
