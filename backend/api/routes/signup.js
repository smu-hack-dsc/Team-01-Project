const app = require('express').Router();

const controller = require('../controllers/signup.controller');

const { Authorize } = require('../../middleware/auth');

const { VOLUNTEERORG, USER } = require('../../utils/constants');

// anytime that the parameter of the url has the signupId,
// then it will have the controller.load method execute first
app.param('signupId', controller.load); // PENDING

app.route('/')
    .post(Authorize(USER), controller.create); // WORKING

app.route('/user')
    .get(Authorize(), controller.getUnderUser); // WORKING
    
app.route('/activity')
    .post(Authorize(VOLUNTEERORG), controller.getUnderActivity); // WORKING

app.route('/:signupId')
    .get(Authorize(), controller.get) // WORKING
    .put(Authorize(VOLUNTEERORG), controller.update) // WORKING
    .delete(Authorize(), controller.remove); // WORKING


module.exports = app;