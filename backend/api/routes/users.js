const app = require('express').Router();
const path = require('path');
const fileUpload = require('express-fileupload');

const controller = require('../controllers/user.controller');

const { Authorize } = require('../../middleware/auth');

const passport = require('passport');
app.use(passport.initialize());
require('../../config/passport.config');

const { USER, VOLUNTEERORG } = require('../../utils/constants');

// anytime that the parameter of the url has the userId, 
// then it will have the controller.load method execute first
// app.param('userId', controller.load); // PENDING

// app.route('/')
//     .get(controller.load) // PENDING


app.route('/register')
    .post(fileUpload({createParentPath: true}), controller.create); // WORKING

app.route('/login')
    .post(controller.login); // WORKING
    
app.route('/profile')
    .get(Authorize(), controller.get) // WORKING
    .put(Authorize(), fileUpload({createParentPath: true}), controller.update) // WORKING
    .delete(Authorize(), controller.remove); // WORKING

app.route('/profile/:uid')
    .get(controller.getById);

module.exports = app;