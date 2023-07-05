const {
    CreateSignup,
    GetSignup, GetByUser, GetByActivity,
    UpdateSignup,
    RemoveSignup
} = require('../service/user.service');

const { CREATED } = require('../../utils/constants');

// Load the signup information into req.locals for use in the next thing
exports.load = async (req, res, next, id) => {
    const signup = await GetSignup(id);
    req.locals = { signup };
    return next();
}

// Return information of the signup
exports.get = (req, res) => res.json({ data: req.locals.signup.transform(), success: 'SUCCESS' });

// Return information of signups under a user
exports.getUnderUser = async (req, res) => {
    try {
        const response = await GetByUser(req.body.userId);
        return res.json({data: response, success: 'SUCCESS'});
    } catch (error) {
        return next(error);
    }
};

// Return information of signups under an activity
exports.getUnderActivity = async (req, res) => {
    try {
        const response = await GetByActivity(req.body.activityId);
        return res.json({data: response, success: 'SUCCESS'});
    } catch (error) {
        return next(error);
    }
};

// Create a signup 
exports.create = async (req, res, next) => {
    try {
        const response = await CreateSignup(req.body);
        return res.status(CREATED).json({ data: response, success: 'SUCCESS' });
    } catch (error) {
        return next(error);
    }
};


// Update user info 
exports.update = async (req, res, next) => {
    try {
        const { user } = req.locals;
        const response = await UpdateUser(user, req.body);
        return res.json({ data: response, success: 'SUCCESS' });
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