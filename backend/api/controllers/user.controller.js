const {
  CreateUser,
  GetUser, LoginUserInfo, FindImage, 
  UpdateUser,
  RemoveUser
} = require('../service/user.service');

// const { Handler } = require('../../middleware/error');
const { CREATED } = require('../../utils/constants');

// Load the user information into req.locals for use in the next thing
// exports.load = async (req, res, next, id) => {
//   const user = await GetUser(id);
//   req.locals = { user };
//   return next();
// };

// Return information of the user 
exports.get = async (req, res) => {
  try {
    const user = await GetUser(req.user.id);
    return res.json(user.transform());
  } catch (error) {
    return next(error);
  }
}

// Get information of the logged in user 
exports.login = async (req, res, next) => {
  try {
    const { user, accessToken } = await LoginUserInfo(req.body);
    res.json({ user: user, token: accessToken});
  } catch (error) {
    return next(error);
  }

}

// Create a user 
exports.create = async (req, res, next) => {
  try {
    const response = await CreateUser(req.body, req.files?.image);
    return res.status(CREATED).json(response);
  } catch (error) {
    return next(error);
  }
};

exports.findImage = async(req, res, next) => {
  try {
    return res.sendFile(req.body.imagePath);
  } catch (error) {
    return next(error);
  }
}
// exports.findEmail = async (req, res, next) => {
//   try {
//     const response = await FindUserEmail(req.body);
//     return res.json(response);
//   } catch (error) {
//     return next(error);
//   }
// }

// Update user info 
exports.update = async (req, res, next) => {
  try {
    const response = await UpdateUser(req.user, req.body, req.files?.image);
    return res.json(response);
  } catch (error) {
    return next(error);
  }
};

// Remove the user account 
exports.remove = async (req, res, next) => {
  try {
    await RemoveUser(req.user);
    res.status(203).end();
  } catch (error) {
    next(error);
  }
};