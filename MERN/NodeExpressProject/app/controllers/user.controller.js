const library = require('../Util/library');
const message = require('../Util/constant');
const db = require('../models');
const User = db.user;
const jwt = library.jwt;

// Create and Save a new User
exports.create = (request, response) => {
  // Validate request
  if (!request.body.username) {
    response.status(400).send({ message: message.error_message });
    return;
  }

  // Create a user
  const user = new User({
    username: request.body.username,
    password: request.body.password,
  });

  // Save User in the database
  user
    .save(user)
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      response.status(500).send({
        message: err.message || message.error_message,
      });
    });
};

// Retrieve all Users from the database & verify using jwt token
exports.findAll = (request, response) => {
  jwt.verify(request.token, process.env.TOKEN_KEY, (err) => {
    if (err) {
      response.sendStatus(403);
    } else {
      //getting page & size from querystring
      const { page, size } = request.query;

      //options for page&limit
      const options = {
        page: parseInt(page),
        limit: parseInt(size),
      };

      const userName = request.query.username;
      User.paginate(userName, options)
        .then((data) => {
          response.send({
            totalItems: data.totalDocs,
            users: data.docs,
            totalPages: data.totalPages,
            currentPage: data.page - 1,
          });
        })
        .catch((err) => {
          response.status(500).send({
            message: err.message || message.error_message,
          });
        });
     }
  });
};

// Find a single User with an id
exports.findOne = (request, response) => {
  const id = request.params.id;

  User.findById(id)
    .then((data) => {
      if (!data) response.status(404).send({ message: message.not_found_message + id });
      else response.send(data);
    })
    .catch((err) => {
      response.status(500).send({ message: message.error_message});
    });
};

// Update a User by the id in the request
exports.update = (request, response) => {
  if (!request.body) {
    return response.status(400).send({
      message: message.empty_data_message,
    });
  }

  const id = request.params.id;

  User.findByIdAndUpdate(id, request.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        response.status(404).send({
          message: message.error_message,
        });
      } else response.send({ message: message.success_message });
    })
    .catch((err) => {
      response.status(500).send({
        message: message.error_message,
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (request, response) => {
  const id = request.params.id;

  User.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        response.status(404).send({
          message: message.error_message,
        });
      } else {
        response.send({
          message: message.success_message,
        });
      }
    })
    .catch((err) => {
      response.status(500).send({
        message: message.error_message,
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (request, response) => {
  User.deleteMany({})
    .then((data) => {
      response.send({
        message: `${data.deletedCount} ${message.success_message}`,
      });
    })
    .catch((err) => {
      response.status(500).send({
        message: err.message || message.error_message,
      });
    });
};

// Authenticate User and pass jwt header
exports.generateToken = (request, response) => {
  var userName = request.body.username;
  User.findOne({ username: userName }).then((user) => {
    if (user) {
      let token = jwt.sign({ user }, process.env.TOKEN_KEY, { expiresIn: message.jwt_expiration });
      response.json({ message: message.success_message, token });
    } else {
      response.send(message.not_found_message);
    }
  });
};

//Verify Token
exports.verifyToken = (request, response, next) => {
  //Get authentication header value
  const bearerHeader = request.headers['authorization'];
  //check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    request.token = bearerHeader;
    //Next middleware
    next();
  } else {
    //Forbidden
    response.sendStatus(403);
  }
};
