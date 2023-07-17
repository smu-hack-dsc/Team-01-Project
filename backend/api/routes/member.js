const app = require('express').Router();

const controller = require('../controllers/member.controller');

const { Authorize } = require('../../middleware/auth');

//TODO: check if there is a need to load this 

const checkRole = (req, res, next) => {
    // const user = req.user;
    const role = req.user.role;
    if (role !== 'volunteerOrg') {
        return next(err);
    } else {
        return next(user);
    }
}

app.route('/')
    .post(Authorize, controller.create); // PENDING

app.route('/:memberId')
    .get(Authorize, controller.get) // PENDING
    .delete(Authorize, checkRole, controller.remove); // PENDING

app.route('/user')
    .get(Authorize, controller.getUnderUser); // PENDING

app.route('/vo')
    .get(Authorize, controller.getUnderVO); // PENDING

module.exports = app;