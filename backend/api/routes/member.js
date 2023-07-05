const app = require('express').Router();

const controller = require('../controllers/member.controller');

//TODO: check if there is a need to load this 

app.route('/')
    .post(controller.create); // PENDING

app.route('/:memberId')
    .get(controller.get) // PENDING
    .delete(controller.remove); // PENDING

app.route('/user')
    .get(controller.getUnderUser); // PENDING

//TODO: check if we want to easily update all the user's acceptance/ volunteerhours/ completion
app.route('/activity')
    .get(controller.getUnderVO); // PENDING

module.exports = app;