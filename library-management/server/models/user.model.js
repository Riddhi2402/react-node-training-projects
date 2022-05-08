module.exports = (mongoose, mongoosastic) => {
  const UserSchema = mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

  UserSchema.plugin(mongoosastic, {
    host: 'localhost',
    port: 9200,
  });

  const User = mongoose.model('users', UserSchema);

  // User.createMapping((err, mapping) => {
  //   console.log('mapping created'); 
  // });

  return User;
};
