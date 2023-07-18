const app = require('express').Router();

const controller = require('../controllers/activity.controller');

const {
    VALIDATION_ERROR,
    FORBIDDEN,
    LOGGED_IN
} = require('../../utils/constants');

const { Authorize } = require('../../middleware/auth');


app.param('activityId', controller.load); // PENDING

app.route('/')
    .get(Authorize(), controller.getAfterToday) // WORKING
    .post(Authorize(LOGGED_IN), controller.create); // WORKING

app.route('/:activityId')
    .get(Authorize(), controller.get) // WORKING
    .put(Authorize(LOGGED_IN), controller.update) // WORKING
    .delete(Authorize(LOGGED_IN), controller.remove); // WORKING

// For filtering by the volunteerOrg in charge
app.route('/vo/:organiserId')
    .get(Authorize(), controller.getByVO) // WORKING

// For filtering by chosen filters
app.route('/filter')
    .post(Authorize(), controller.filterFunc); // WORKING

module.exports = app;