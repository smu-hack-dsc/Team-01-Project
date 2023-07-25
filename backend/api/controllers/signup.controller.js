const {
    CreateSignup,
    GetSignup, GetByUser, GetByActivity, CheckGet,
    UpdateSignup,
    RemoveSignup
} = require('../service/signup.service');

const { CREATED } = require('../../utils/constants');

// Load the signup information into req.locals for use in the next thing
exports.load = async (req, res, next, id) => {
    const signup = await GetSignup(id);
    req.locals = { signup };
    return next();
}

// Return information of the signup
exports.get = async (req, res) => {
    try {
        const response = await CheckGet(req.user, req.locals.signup);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
}

// Return information of signups under a user
exports.getUnderUser = async (req, res, next) => {
    try {
        const response = await GetByUser(req.user);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
};

// Return information of signups under an activity
exports.getUnderActivity = async (req, res, next) => {
    try {
        const response = await GetByActivity(req.user, req.body.activityId);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
};

// Create a signup 
exports.create = async (req, res, next) => {
    try {
        const response = await CreateSignup({userId: req.user.id, activityId: req.body.activityId});
        return res.status(CREATED).json(response);
    } catch (error) {
        return next(error);
    }
};


// Update user info 
exports.update = async (req, res, next) => {
    try {
        const { signup } = req.locals;
        const response = await UpdateSignup(req.user, signup, req.body);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
};

// Delete a signup record
exports.remove = async (req, res, next) => {
    try {
        const { signup } = req.locals;
        await RemoveSignup(signup);
        res.status(203).end();
    } catch (error) {
        next(error);
    }
};