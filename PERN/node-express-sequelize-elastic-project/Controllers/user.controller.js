const UserModel = require('../Model/user.model');
const text = require('../Util/constants');
const ElasticSearchService = require('../es/ElasticSearchService');

//getAllUsers
exports.getAllUsers = (request, response) => {
  UserModel.findAll()
    .then((data) => {
      response.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

//getSelectedUser
exports.getSelectedUser = async(request, response) => {
  const data = await ElasticSearchService.compoundQuery(request.params.searchvalue, 'search_index', [
    'firstname',
    'lastname',
    'description',
  ]);
  response.send(data);
};

//postUser
exports.postUser = (request, response) => {
  const user = {
    file: request.file.filename,
    firstname: request.body.firstname,
    lastname: request.body.lastname,
    email: request.body.email,
    password: request.body.password,
    description: request.body.description,
  };

  UserModel.create(user)
    .then((data) => response.send(data))
    .catch((error) => response.send(error));
};

//findOneUserById
exports.findUserById = (request, response) => {
  const id = request.params.id;

  UserModel.findByPk(id)
    .then((data) => response.send(data))
    .catch((error) => response.send(error));
};

//Update user by id
exports.updateUserById = (request, response) => {
  UserModel.update(
    {
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      email: request.body.email,
      password: request.body.password,
      description: request.body.description,
    },
    {
      where: { id: request.params.id },
    }
  )
    .then(() => response.send(text.updateMessage))
    .catch((error) => response.send(error));
};

//delete user by id
exports.deleteUserById = (request, response) => {
  UserModel.destroy({
    where: { id: request.params.id },
  })
    .then(() => response.sendStatus(200))
    .catch((error) => response.send(error));
};

//delete All user
exports.deleteAllUser = (request, response) => {
  UserModel.destroy({ where: {} })
    .then(() => response.send(text.deleteMessage))
    .catch((error) => response.send(error));
};
