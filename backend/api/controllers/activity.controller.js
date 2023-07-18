const {
    CreateActivity,
    GetActivity, GetActivitiesAfterToday, GetActivitiesByVo,
    UpdateActivity,
    MatchByFilters,
    RemoveActivity
} = require('../service/activity.service');

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
exports.getAfterToday = async (req, res, next) => {
    try {
        const response = await GetActivitiesAfterToday(req);
        console.log({response: response});
        return res.json({ data: response, success: 'SUCCESS' });
    } catch (error) {
        return next(error);
    }
}

// Return informaiton of all the activities under the VO
exports.getByVO = async (req, res, next) => {
    try {
        const organiserId = req.params.organiserId;
        const response = await GetActivitiesByVo(organiserId);
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
        const response = await CreateActivity({activityName: req.body.activityName, 
                                                requiredSkills: req.body.requiredSkills,
                                                categories: req.body.categories,
                                                beginDate: req.body.beginDate,
                                                endDate: req.body.endDate,
                                                organiserId: req.user.id,
                                                description: req.body.description
                                                });
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

// Filter by skills required for the user
exports.filterUserSkills = async (req, res, next) => {
    try {
        const user = req.user;

        const response = await MatchActivitiesBySkills(user.skills);
        return res.json({data: response, success: 'SUCCESS'});
    } catch (error) {
        return next(error);
    }
}

// Filter the shown activities by the user's interests
exports.filterUserInterests = async (req, res, next) => {
    try {
        const user = req.user;
        const response = await MatchActivitiesByInterests(user.interests);
        return res.json({data: response, success: 'SUCCESS'});
    } catch (error) {
        return next(error);
    }
}

exports.filterFunc = async (req, res, next) => {
    try {
        const filterOptions = req.body;
        const response = await MatchByFilters(filterOptions);
        return res.json({data: response, success: 'SUCCESS'});
    } catch (error) {
        return next(error);
    }
}

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

