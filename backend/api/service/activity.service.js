const APIError = require('../../utils/APIError');
const Activity = require('../models/activity.model');
const path = require('path');

const mongoose = require("mongoose");

// Create
exports.CreateActivity = async (userData, activityData, imageData) => {
    try {
        const postPicture = imageData;
        const pictureName = `${Date.now()}-${imageData.name}`;
        const uploadPath = path.join(__dirname + '/../../src/activityUploads/' + pictureName);

        postPicture.mv(uploadPath, error => {
            if (error) {
                throw new APIError({
                    message: "file cannot mv",
                    status: 400,
                })
            } 
        });

        const activity = new Activity({
            activityName: activityData.activityName,
            requiredSkills: activityData.requiredSkills,
            categories: activityData.categories,
            beginDate: activityData.beginDate,
            endDate: activityData.endDate,
            organiserId: userData.id,
            description: activityData.description,
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
exports.UpdateActivity = async (activityData, userData, newData, imageData) => {
    try {
        if (activity.organiserId !== userData.id) {
            throw new APIError({ message: INVALID_CREDENTIALS, errorCode: UNAUTHORIZED });
        }
        
        const updateData = {};
        const fields = ['activtyName', 'requiredSkills', 'categories', 'beginDate', 'endDate', 'description'];
        fields.forEach((field) => {
            updateData[field] = !newData[field] ? activityData[field] : newData[field];
        });
    
        if (imageData) {
            const postPicture = imageData;
            const pictureName = `${Date.now()}-${imageData.name}`;
            const uploadPath = path.join(__dirname + '/../../src/activityUploads/' + pictureName);

            postPicture.mv(uploadPath, error => {
                if (error) {
                    throw new APIError({
                        message: "file cannot mv",
                        status: 400,
                    })
                } 
            });

        updateData[imageInfo] = {
            imageName: pictureName,
            imagePath: uploadPath,
        };
    }

        const savedActivity = await updateData.save();
        return savedActivity.transform();
    } catch (err) {
        throw Activity.checkDuplication(err);
    }
};

// Delete
exports.RemoveActivity = async (activity, userData) => {
    if (activity.organiserId !== userData.id) {
        throw new APIError({ message: INVALID_CREDENTIALS, errorCode: UNAUTHORIZED });
    }
    activity.deleteOne();
};