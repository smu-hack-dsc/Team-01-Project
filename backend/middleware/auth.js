const passport = require('passport');

const {
    UNAUTHORIZED, LOGGED_IN, FORBIDDEN,
  } = require('../utils/constants');
  const APIError = require('../utils/APIError');
  
  const handleJWT = (req, res, next, roles) => async (err, user, info) => {
    const error = err || info;
  
    const apiError = new APIError({
      message: error ? error.message : 'Unauthorized',
      errorCode: UNAUTHORIZED,
    });

    if (err || !user) {
      return next(apiError);
    } 
  
    req.user = user;
  
    return next();
  };


// TODO: solve the bug 
passport.initialize();    
exports.Authorize = (roles) => (req, res, next) => {
    passport.authenticate('jwt', { session: false }, handleJWT(req, res, next))(
      req,
      res,
      next,
      roles
    );};