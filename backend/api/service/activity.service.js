const APIError = require('../../utils/APIError');
const Activity = require('../models/activity.model');
const path = require('path');

const mongoose = require("mongoose");

const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
require('dotenv').config();


const bucketName = process.env.BUCKET_NAME
const bucketRegion = process.env.BUCKET_REGION
const accessKey = process.env.ACCESS_KEY
const secretAccessKey = process.env.SECRET_ACCESS_KEY

const s3 = new S3Client({
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretAccessKey
    },
    region: bucketRegion
});

// Create
exports.CreateActivity = async (userData, activityData, imageData) => {
    try {

        let pictureName;
        if (imageData) {
            pictureName = `${Date.now()}-${imageData.name}`;
            const params = {
                Bucket: bucketName,
                Key: pictureName,
                Body: imageData.data.buffer,
                ContentType: imageData.mimetype,
            };
            const command = new PutObjectCommand(params);
            await s3.send(command);
        }
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
            }
        });
        const saved = await activity.save();
        return saved.transform();
    } catch (err) {
        throw Activity.checkDuplication(err);
    }
};

// Read
exports.GetActivity = async (id) => {
    const activity = await Activity.get(id);

    const getObjectParams = {
        Bucket: bucketName,
        Key: activity.imageInfo.imageName,
    };

    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, command, { expiresIn: 60 });
    activity.imageUrl = url;
    return activity;
}

exports.GetActivitiesAfterToday = async (req) => {
    try {
        const today = new Date();
        const activities = await Activity.find({
            endDate: { $gte: today }
        });
        for (const activity of activities) {
            if (activity.imageInfo) {
                const getObjectParams = {
                    Bucket: bucketName,
                    Key: activity.imageInfo.imageName,
                };

                const command = new GetObjectCommand(getObjectParams);
                const url = await getSignedUrl(s3, command, { expiresIn: 60 });
                activity.imageInfo.imagePath = url;
                activity.transform()
            }
        }

        return activities
    } catch (err) {
        throw Activity.checkDuplication(err);
    }
};

exports.GetActivitiesByVo = async (organiserId) => {
    try {
        const organiserIdString = new mongoose.Types.ObjectId(organiserId);
        const activities = await Activity.find({ organiserId: organiserIdString });
        for (const activity of activities) {
            if (activity.imageInfo) {
                const getObjectParams = {
                    Bucket: bucketName,
                    Key: activity.imageInfo.imageName,
                };

                const command = new GetObjectCommand(getObjectParams);
                const url = await getSignedUrl(s3, command, { expiresIn: 60 });
                activity.imageInfo.imagePath = url;
                activity.transform()
            }
        }
        return activities;
    } catch (err) {
        throw Activity.checkDuplication(err);
    }
};

exports.MatchByFilters = async (options) => {
    const { date, skills, categories } = options;
    let activities;
    if (date == undefined) {
        activities = await Activity.find({
            endDate: { $gte: new Date() },
            $expr: {
                $and: [
                    { $setIsSubset: ["$requiredSkills", skills] },
                    { $setIsSubset: ["$categories", categories] }
                ]
            }
        });
    } else {
        activities = await Activity.find({
            endDate: { $gte: date },
            $expr: {
                $and: [
                    { $setIsSubset: ["$requiredSkills", skills] },
                    { $setIsSubset: ["$categories", categories] }
                ]
            }
        });
    }
    activities.forEach(async (activity) => {
        const getObjectParams = {
            Bucket: bucketName,
            Key: user.imageInfo.imageName,
        };

        const command = new GetObjectCommand(getObjectParams);
        const url = await getSignedUrl(s3, command, { expiresIn: 60 });
        activity.imageInfo.imagePath = url;
        activity.transform();
    });
    return activities;
}



// Update
exports.UpdateActivity = async (activityData, userData, newData, imageData) => {
    try {
        if (activityData.organiserId !== userData.id) {
            throw new APIError({ message: INVALID_CREDENTIALS, errorCode: UNAUTHORIZED });
        }

        const updateData = {};
        const fields = ['activtyName', 'requiredSkills', 'categories', 'beginDate', 'endDate', 'description'];
        fields.forEach((field) => {
            updateData[field] = !newData[field] ? activityData[field] : newData[field];
        });

        // for image updating
        if (imageData) {
            const path = activityData.imageInfo?.imageName ? activityData.imageInfo.imageName : `${Date.now()}-${imageData.name}`;
            const params = {
                Bucket: bucketName,
                Key: path,
                Body: imageData.buffer,
                ContentType: imageData.mimetype,
            };
            const command = new PutObjectCommand(params);
            await s3.send(command);
            updateData.imageInfo.imageName = path;
        }
        Object.assign(activityData, updateData)
        const savedActivity = await activityData.save();
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
    if (activity.imageInfo) {
        const params = {
            Bucket: bucketName,
            Key: activity.imageInfo.imageName
        }
        const command = new DeleteObjectCommand(params);
        await s3.send(command);
    }
    activity.deleteOne();
};