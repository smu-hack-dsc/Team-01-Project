const app = require('express').Router();

const controller = require('../controllers/signup.controller');

const { Authorize } = require('../../middleware/auth');

const { VOLUNTEERORG, USER } = require('../../utils/constants');

// anytime that the parameter of the url has the signupId,
// then it will have the controller.load method execute first
app.param('signupId', controller.load); // PENDING


app.route('/user')
    .get(Authorize(USER), controller.getUnderUser); // WORKING

app.route('/activity')
    .post(Authorize(VOLUNTEERORG), controller.getUnderActivity); // WORKING

app.route('/activity/:activityId')
    .get(Authorize(USER), controller.getUserActivity) // WORKING
    .post(Authorize(USER), controller.create) // WORKING
    .delete(Authorize(USER), controller.deleteUserActivity); // WORKING


app.route('/:signupId')
    .get(Authorize(), controller.get) // WORKING
    .put(Authorize(VOLUNTEERORG), controller.update) // WORKING
    .delete(Authorize(), controller.remove); // WORKING


module.exports = app;