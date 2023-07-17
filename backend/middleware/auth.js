const {
  UNAUTHORIZED, FORBIDDEN, ROLES, USER, VOLUNTEERORG, LOGGED_IN
} = require('../utils/constants');
const APIError = require('../utils/APIError');

// const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../config/passport.config')

require('dotenv').config()

const handleJWT = (req, res, next, roles) => async (err, user, info) => {
  const error = err || info;

  const apiError = new APIError({
    message: error ? error.message : 'Unauthorized',
    status: UNAUTHORIZED,
    stack: error ? error.stack : undefined,
  });
  if (err || !user) {
    return next(apiError);
  }

  console.log({user: user});

  if (roles === LOGGED_IN) {
    if (user.role !== VOLUNTEERORG) {
      apiError.status = FORBIDDEN;
      apiError.message = 'Forbidden';
      return next(apiError);
    }
  } else if (!roles.includes(user.role)) {
    apiError.status = FORBIDDEN;
    apiError.message = 'Forbidden by missing';
    return next(apiError);
  }

  req.user = user;

  return next();
};

exports.Authorize = (roles = ROLES) => (req, res, next) => passport.authenticate('jwt',
  { session: false },
  handleJWT(req, res, next, roles))(req, res, next);