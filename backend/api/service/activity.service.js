const Activity = require('../models/activity.model');

// Create
exports.CreateActivity = async(activityData) => {
    try {
        const activity = new Activity(activityData);
        const saved = await activity.save();
        return saved.transform();
    } catch (err) {
        throw Activity.checkDuplication(err);
    }
};

// Read
exports.GetActivity = async (id) => Activity.get(id);

exports.GetActivitiesAfterToday = async (req) => {
    try {
    const today = new Date();
    const activities = await Activity.find({ beginDate: { $gte: today } });
    return activities.transform();
    } catch (err) {
        throw Member.checkDuplication(err);
    }
};

exports.GetActivitiesByVo = async (voId) => {
    try {
        const activities = await Activity.find({organiserId: voId});
        return activities.transform();
    } catch (err) {
        throw Activity.checkDuplication(err);
    }
};

//TODO: include searching by skills and categories


// Update
exports.UpdateActivity = async (activity, newData) => {
    try {
        const updataData = Object.assign(activity, newData);
        const savedActivity = await updataData.save();
        return savedActivity.transform();
    } catch (err) {
        throw Activity.checkDuplication(err);
    }
};

// Delete
exports.RemoveActivity = async (activity) => {
    activity.remove();
};