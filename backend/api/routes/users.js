const app = require('express').Router();
//for validating data later on
// const Validate = require('express-validation');
const controller = require('../controllers/user.controller');

//for authorizing user later on
const { Authorize } = require('../../middleware/auth');

// const {
//   listUsers, createUser, replaceUser, updateUser,
// } = require('../validations/user');

const { LOGGED_IN } = require('../../utils/constants');

// anytime that the parameter of the url has the userId, 
// then it will have the controller.load method execute first
app.param('userId', controller.load); // PENDING

app.route('/')
    .get(controller.load) // PENDING

app.route('/register')
    .post(controller.create); // PENDING

app.route('/profile')
    .get(Authorize(), controller.loggedIn); // PENDING

app.route('/:userId')
    .get(Authorize(LOGGED_IN), controller.get) // PENDING
    .put(Authorize(LOGGED_IN), controller.update) // PENDING
    .delete(Authorize(LOGGED_IN), controller.remove); // PENDING


module.exports = app;