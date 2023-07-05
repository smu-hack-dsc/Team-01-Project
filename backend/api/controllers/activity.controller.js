const {
    CreateActivity,
    GetActivity, GetActivitiesAfterToday, GetActivitiesByVo,
    UpdateActivity,
    RemoveActivity
} = require('../controllers/activity.controller');

const { CREATED } = require('../../utils/constants');
const { RemoveMember } = require('../service/member.service');

// Load the activity information into req.locals
exports.load = async (req, res, next, id) => {
    const activity = await GetActivity(id);
    req.locals = { activity };
    return next();
};


// Return information of activity by its id 
exports.get = async (req, res) => res.json({ data: req.locals.activity.transform(), success: 'SUCCESS' });

// Return information of all the activities after today
exports.getAfterToday = async (req, res) => {
    try {
        const response = await GetActivitiesAfterToday(req);
        return res.json({ data: response, success: 'SUCCESS' });
    } catch (error) {
        return next(error);
    }
}

// Return informaiton of all the activities under the VO
exports.getByVO = async (req, res) => {
    try {
        const voId = req.params;
        const response = await GetActivitiesByVo(voId);
        return res.json({ data: response, success: 'SUCCESS' });
    } catch (error) {
        return next(error);
    }
}

// Return information of activities under this category
// Return information of activities with this required skill

// Create activity
exports.create = async (req, res, next) => {
    try {
        const response = await CreateActivity(req.body);
        return res.status(CREATED).json({ data: response, success: 'SUCCESS' });
    } catch (error) {
        return next(error);
    }
}
// Update an activity
exports.update = async (req, res, next) => {
    try {
        const { activity } = req.locals;
        const response = await UpdateActivity(activity, req.body);
        return res.json({ data: response, success: 'SUCCESS' });
    } catch (error) {
        return next(error);
    }
};

// Delete an activity
exports.remove = async (req, res, next) => {
    try {
        const { activity } = req.locals;
        await RemoveActivity(activity);
        res.status(203).end();
    } catch (error) {
        next(error);
    }
}

