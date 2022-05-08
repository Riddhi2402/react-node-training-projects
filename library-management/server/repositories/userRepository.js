const db = require("../models");
const User = db.users;

exports.registerUser = (request,) => {
  const user = new User({
    email: request.body.email,
    password: hashPassword,
  });

  user
    .save()
    .then(() => {
      response.json({ message: "user added successfully" });
    })
    .catch(() => {
      response.json({ error: "error in register user" });
    });
};
