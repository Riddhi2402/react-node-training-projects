const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const db = require("../models");
const ElasticSearchService = require("../elastic-search/elasticSearchService");
// const User = db.users;

const registerUser = (request, response) => {
  bcrypt.hash(request.body.password, 10, (error, hashPassword) => {
    if (error) {
      response.json({ error: error });
    }

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

    // user.on('es-indexed', (err, result) => {
    //   console.log('indexed to elastic search');
    // });

    client
      .index({
        index: "userss",
        type: "doc",
        refresh: true,
        body: { email: user.email },
      })
      .then(
        function (resp) {
          console.log("resp", resp);
        },
        function (err) {
          console.log(err.message);
        }
      );
  });
};

const loginUser = (request, response) => {
  var email = request.body.email;
  var password = request.body.password;

  User.findOne({ email: email }).then((user) => {
    if (user) {
      bcrypt.compare(password, user.password, (error, result) => {
        if (error) {
          response.json({ error: error });
        }
        if (result) {
          let token = jwt.sign({ name: user.name }, "secretvalue", {
            expiresIn: "1h",
          });
          response.json({ message: "successfully login", token });
        } else {
          response.json({ message: "invalid credintials" });
        }
      });
    } else {
      response.json({ message: "user not found" });
    }
  });
};

//getSelectedUser
const searchUsers = async (request, response) => {
  const data = await ElasticSearchService.matchSearchTermsQuery(
    request.params.searchvalue,
    "userss",
    ["email"]
  );
  response.send(data);
};

module.exports = { registerUser, loginUser, searchUsers };
