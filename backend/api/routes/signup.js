const app = require('express').Router();

const controller = require('../controllers/signup.controller');

const { Authorize } = require('../../middleware/auth');

// anytime that the parameter of the url has the signupId,
// then it will have the controller.load method execute first
app.param('signupId', controller.load); // PENDING

app.route('/')
    .get(Authorize, controller.load) // PENDING
    .post(Authorize, controller.create); // PENDING

app.route('/:signupId')
    .get(Authorize, controller.get) // PENDING
    .put(Authorize, controller.update) // PENDING
    .delete(Authorize, controller.remove); // PENDING

app.route('/user')
    .get(Authorize, controller.getUnderUser); // PENDING

//TODO: check if we want to easily update all the user's acceptance/ volunteerhours/ completion
app.route('/activity')
    .get(Authorize, controller.getUnderActivity); // PENDING

module.exports = app;