const app = require('express').Router();

const controller = require('../controllers/activity.controller');

const { VOLUNTEERORG, USER } = require('../../utils/constants');

const { Authorize } = require('../../middleware/auth');


app.param('activityId', controller.load); // PENDING

app.route('/')
    .get(Authorize(), controller.getAfterToday) // WORKING
    .post(Authorize(VOLUNTEERORG), controller.create); // WORKING

app.route('/:activityId')
    .get(Authorize(), controller.get) // WORKING
    .put(Authorize(VOLUNTEERORG), controller.update) // WORKING
    .delete(Authorize(VOLUNTEERORG), controller.remove); // WORKING

// For filtering by the volunteerOrg in charge
app.route('/vo/:organiserId')
    .get(Authorize(), controller.getByVO) // WORKING

// For filtering by chosen filters
app.route('/filter')
    .post(Authorize(), controller.filterFunc); // WORKING

module.exports = app;