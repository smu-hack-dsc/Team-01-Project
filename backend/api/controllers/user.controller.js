const {
  CreateUser,
  GetUser,
  UpdateUser,
  RemoveUser
} = require('../service/user.service');

// const { Handler } = require('../../middleware/error');
const { CREATED } = require('../../utils/constants');

// Load the user information into req.locals for use in the next thing
exports.load = async (req, res, next, id) => {
  const user = await GetUser(id);
  req.locals = { user };
  return next();
};

// Return information of the user 
exports.get = (req, res) => res.json({ data: req.locals.user.transform(), success: 'SUCCESS' });

// Get information of the logged in user 
exports.loggedIn = (req, res) => res.json({ data: req.user.transform(), success: 'SUCCESS' });

// Create a user 
exports.create = async (req, res, next) => {
  try {
    const response = await CreateUser(req.body);
    return res.status(CREATED).json({ data: response, success: 'SUCCESS' });
  } catch (error) {
    return next(error);
  }
};

// Update user info 
exports.update = async (req, res, next) => {
  try {
    const { user } = req.locals;
    const response = await UpdateUser(user, req.body);
    return res.json({ data: response, success: 'SUCCESS' });
  } catch (error) {
    return next(error);
  }
};

// Remove the user account 
exports.remove = async (req, res, next) => {
  try {
    const { user } = req.locals;
    await RemoveUser(user);
    res.status(203).end();
  } catch (error) {
    next(error);
  }
};