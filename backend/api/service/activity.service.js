const APIError = require('../../utils/APIError');
const Activity = require('../models/activity.model');

const mongoose = require("mongoose");

// Create
exports.CreateActivity = async (userData, activityData, imageData) => {
    try {
        const postPicture = imageData;
        const pictureName = moment().format().toString() + imageData.name;
        const uploadPath = __dirname + '../../../src/activityUploads/' + pictureName ;
        postPicture.mv(uploadPath);

        const activity = new Activity({userData, activityData, 
            imageInfo: {
                imageName: pictureName,
                imagePath: uploadPath,
            }
        });
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
        const activities = await Activity.find({
            endDate: { $gte: today },
            $expr: {
                $and: [
                    { $setIsSubset: ["$requiredSkills", req.user.skills] },
                    { $setIsSubset: ["$categories", req.user.interests] }
                ]
            }
        });
        activities.forEach(activity => {
            activity.transform();
        });
        return activities;
    } catch (err) {
        throw Activity.checkDuplication(err);
    }
};

exports.GetActivitiesByVo = async (organiserId) => {
    try {
        const organiserIdString = new mongoose.Types.ObjectId(organiserId);
        const activities = await Activity.find({ organiserId: organiserIdString });
        activities.forEach(activity => {
            activity.transform();
        });
        return activities;
    } catch (err) {
        throw Activity.checkDuplication(err);
    }
};

exports.MatchByFilters = async (options) => {
    const { date, skills, categories } = options;
    if (date == undefined) {
        const activities = await Activity.find({
            endDate: { $gte: new Date() },
            $expr: {
                $and: [
                    { $setIsSubset: ["$requiredSkills", skills] },
                    { $setIsSubset: ["$categories", categories] }
                ]
            }
        });
        activities.forEach(activity => {
            activity.transform();
        });
        return activities;
    } else {
        const activities = await Activity.find({
            endDate: { $gte: date },
            $expr: {
                $and: [
                    { $setIsSubset: ["$requiredSkills", skills] },
                    { $setIsSubset: ["$categories", categories] }
                ]
            }
        });
        activities.forEach(activity => {
            activity.transform();
        });
        return activities;
    }
}



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
    activity.deleteOne();
};