const app = require('express').Router();

const controller = require('../controllers/activity.controller');

app.route('/')
    .post(controller.create) // PENDING
    .get(controller.getAfterToday); // PENDING

app.route('/:activityId')
    .get(controller.get) // PENDING
    .put(controller.update) // PENDING
    .delete(controller.remove); // PENDING

app.route('/vo/:voId')
    .get(controller.getByVO) // PENDING

//TODO: figure out how to properly filter the options
// app.route('/filterDate')

module.exports = app;