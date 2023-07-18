const app = require('express').Router();
//for validating data later on
// const Validate = require('express-validation');
const controller = require('../controllers/user.controller');

const { Authorize } = require('../../middleware/auth');

const passport = require('passport');
app.use(passport.initialize());
require('../../config/passport.config');

// const {
//   listUsers, createUser, replaceUser, updateUser,
// } = require('../validations/user');

const { USER, VOLUNTEERORG } = require('../../utils/constants');

// anytime that the parameter of the url has the userId, 
// then it will have the controller.load method execute first
app.param('userId', controller.load); // PENDING

// app.route('/')
//     .get(controller.load) // PENDING


app.route('/register')
    .post(controller.create); // WORKING

app.route('/login')
    .post(controller.login); // WORKING
    
app.route('/:userId')
    .get(Authorize(USER), controller.get) // WORKING
    .put(Authorize(USER), controller.update) // WORKING
    .delete(Authorize(USER), controller.remove); // WORKING

module.exports = app;