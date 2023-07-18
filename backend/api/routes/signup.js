const app = require('express').Router();

const controller = require('../controllers/signup.controller');

const { Authorize } = require('../../middleware/auth');

const { VOLUNTEERORG, USER } = require('../../utils/constants');

// anytime that the parameter of the url has the signupId,
// then it will have the controller.load method execute first
app.param('signupId', controller.load); // PENDING

app.route('/')
    .post(Authorize(USER), controller.create); // PENDING

app.route('/:signupId')
    .get(Authorize(), controller.get) // PENDING
    .put(Authorize(VOLUNTEERORG), controller.update) // PENDING
    .delete(Authorize(), controller.remove); // PENDING

app.route('/user')
    .get(Authorize(USER), controller.getUnderUser); // PENDING

app.route('/activity')
    .get(Authorize(VOLUNTEERORG), controller.getUnderActivity); // PENDING

module.exports = app;