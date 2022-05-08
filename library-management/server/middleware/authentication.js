const jwt = require('jsonwebtoken');

//middleware for verifying jwt token
const authenticateJWT = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, 'secretvalue', (err, user) => {
      if (err) {
        return response.sendStatus(403);
      }

      request.user = user;
      next();
    });
  } else {
    response.sendStatus(401);
  }
};
module.exports = authenticateJWT;
