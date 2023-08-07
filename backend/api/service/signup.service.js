const APIError = require('../../utils/APIError');
const { VALIDATION_ERROR, BAD_REQUEST, VOLUNTEERORG, INVALID_CREDENTIALS, UNAUTHORIZED } = require('../../utils/constants');

const Activity = require('../models/activity.model');
const Signup = require('../models/signup.model');

const mongoose = require('mongoose');

// Create a signup
exports.CreateSignup = async (signupData) => {
    try {
        const user = new mongoose.Types.ObjectId(signupData.userId);
        const activity = new mongoose.Types.ObjectId(signupData.activityId);
        const signup = new Signup({ user, activity });
        const saved = await signup.save();
        return saved.transform();
    } catch (err) {
        throw Signup.checkDuplication(err);
    }
};

// Get signup by the signup id
exports.GetSignup = async (id) => Signup.get(id);

exports.GetUserActivity = async (userId, activityId) => {
    try {
        const signup = await Signup.findOne({
            activity: activityId,
            user: userId
        });
        return signup.transform()
    } catch (err) {
        throw Signup.checkDuplication(err);
    }
}

exports.DeleteUserActivity = async (userId, activityId) => {
    try {
        const signup = await Signup.deleteOne({
            activity: activityId,
            user: userId
        });
    } catch (err) {
        throw Signup.checkDuplication(err);
    }
}
exports.CheckGet = async (userData, signupData) => {
    if (userData.id !== signupData.user) {
        const activityConcerned = await User.find({ acitivity: signupData.activty });
        if (userData.id !== activityConcerned.organiserId) {
            throw new APIError({ message: INVALID_CREDENTIALS, errorCode: UNAUTHORIZED });
        }
    }

    return signupData;

};

// Get signup by the user id provided (giving back all the activities that user signed up for)
exports.GetByUser = async (userInfo) => {
    try {
        const userIdString = new mongoose.Types.ObjectId(userInfo.id);

        const role = userInfo.role;

        var userSignups;

        if (role === VOLUNTEERORG) {
            const activities = await Activity.find({ organiserId: userIdString });
            activities.forEach(activity => {
                activity = activity.id;
            });
            userSignups = await Signup.find({ activity: { $in: activities } });
        } else {
            userSignups = await Signup.find({ user: userIdString });
        }
        userSignups.forEach(userSignup => {
            userSignup.transform();
        });
        return userSignups;

    } catch (err) {
        throw Signup.checkDuplication(err);
    }
};

// Get signup by the activity id provided (giving back all the users that signedup for the activity)
exports.GetByActivity = async (activityId) => {
    try {
        const activityIdString = new mongoose.Types.ObjectId(activityId);
        const activitySignups = await Signup.find({ activity: activityIdString });
        activitySignups.forEach(activitySignup => {
            activitySignup.transform();
        });
        return activitySignups;
    } catch (err) {
        throw Signup.checkDuplication(err);
    }
};


// Update the signup information (for example when you have a successful application)
exports.UpdateSignup = async (userData, signup, newData) => {
    try {
        this.CheckGet(userData, signup);
        const newUserDetails = newData.userDetails;
        if (!signup.userDetails.acceptanceIndication) {
            if (!newUserDetails.hoursCompleted || newUserDetails.completionIndication || newUserDetails.rating) {
                throw new APIError({ message: VALIDATION_ERROR, errorCode: BAD_REQUEST });
            }
        } else if (!signup.userDetails.completionIndication) {
            if (newUserDetails.hoursCompleted || newUserDetails.rating) {
                throw new APIError({ message: VALIDATION_ERROR, errorCode: BAD_REQUEST });
            }
        }

        const updateData = Object.assign(signup, newData);
        const saved = await updateData.save();
        return saved.transform();
    } catch (err) {
        throw Signup.checkDuplication(err);
    }
};

// Remove signup 
exports.RemoveSignup = async (signup) => {
    signup.deleteOne();
};