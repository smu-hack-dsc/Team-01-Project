const {
  UNAUTHORIZED, LOGGED_IN, FORBIDDEN,
} = require('../utils/constants');
const APIError = require('../utils/APIError');

const jwt = require('jsonwebtoken');

require('dotenv').config()

exports.Authorize = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(UNAUTHORIZED);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(FORBIDDEN);
    req.user = user;
    next();
  });
};