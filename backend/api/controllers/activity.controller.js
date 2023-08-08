const {
    CreateActivity,
    GetActivity, GetActivitiesAfterToday, GetActivitiesByVo,
    UpdateActivity,
    MatchByFilters,
    RemoveActivity
} = require('../service/activity.service');

const { CREATED } = require('../../utils/constants');

// Load the activity information into req.locals
exports.load = async (req, res, next, id) => {
    const activity = await GetActivity(id);
    req.locals = { activity };
    return next();
};


// Return information of activity by its id 
exports.get = async (req, res) => res.json(req.locals.activity.transform());

// Return information of all the activities after today
exports.getAfterToday = async (req, res, next) => {
    try {
        const response = await GetActivitiesAfterToday(req);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
}

// Return informaiton of all the activities under the VO
exports.getByVO = async (req, res, next) => {
    try {
        const organiserId = req.params.organiserId;
        const response = await GetActivitiesByVo(organiserId);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
}

// Create activity
exports.create = async (req, res, next) => {
    try {
        const response = await CreateActivity(req.user, req.body, req.files?.image);
        return res.status(CREATED).json(response);
    } catch (error) {
        return next(error);
    }
}

// Update an activity
exports.update = async (req, res, next) => {
    try {
        const { activity } = req.locals;
        const response = await UpdateActivity(activity, req.user, req.body, req.files?.image);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
};

// To match the activities by their filter
exports.filterFunc = async (req, res, next) => {
    try {
        const filterOptions = req.body;
        const response = await MatchByFilters(filterOptions);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
}

// Delete an activity
exports.remove = async (req, res, next) => {
    try {
        const { activity } = req.locals;
        await RemoveActivity(activity, req.user);
        res.status(203).end();
    } catch (error) {
        next(error);
    }
}

