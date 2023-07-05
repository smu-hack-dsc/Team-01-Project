const app = require('express').Router();

const controller = require('../controllers/activity.controller');

app.route('/')
    .post(controller.create) // PENDING
    .get(controller.get); // PENDING

app.route('/:activityId')
    .get(controller.get) // PENDING
    .put(controller.update) // PENDING
    .delete(controller.delete); // PENDING

//TODO: figure out how to properly filter the options
app.route('/filterDate')

module.exports = app;