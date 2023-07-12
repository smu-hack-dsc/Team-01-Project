const app = require('express').Router();

const controller = require('../controllers/signup.controller');

// anytime that the parameter of the url has the signupId,
// then it will have the controller.load method execute first
app.param('signupId', controller.load); // PENDING

app.route('/')
    .get(controller.load) // PENDING
    .post(controller.create); // PENDING

app.route('/:signupId')
    .get(controller.get) // PENDING
    .put(controller.update) // PENDING
    .delete(controller.remove); // PENDING

app.route('/user')
    .get(controller.getUnderUser); // PENDING

//TODO: check if we want to easily update all the user's acceptance/ volunteerhours/ completion
app.route('/activity')
    .get(controller.getUnderActivity); // PENDING

module.exports = app;