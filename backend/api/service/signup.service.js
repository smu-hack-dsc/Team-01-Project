const APIError = require('../../utils/APIError');
const { VALIDATION_ERROR, BAD_REQUEST } = require('../../utils/constants');
const Signup = require('../models/signup.model');

// Create a signup
exports.CreateSignup = async (signupData) => {
    try {
        const user = new mongoose.Types.ObjectId(signupData.userId);
        const activity = new mongoose.Types.ObjectId(signupData.activityId);
        const signup = new Signup({user, activity});
        const saved = await signup.save();
        return saved.transform();

    } catch (err) {
        throw Signup.checkDuplication(err);
    }
};

// Get signup by the signup id
exports.GetSignup = async(id) => Signup.get(id);

// Get signup by the user id provided (giving back all the activities that user signed up for)
exports.GetByUser = async(userId) => {
    try {
        const userIdString = new mongoose.Types.ObjectId(userId);
    const userSignups = await Signup.find({user: userIdString});
    userSignups.forEach(userSignup => {
        userSignup.transform();
    });
    return userSignups;
    } catch (err) {
        throw Signup.checkDuplication(err);
    }
};

// Get signup by the activity id provided (giving back all the users that signedup for the activity)
exports.GetByActivity = async(activityId) => {
    try {
        const activityIdString = new mongoose.Types.ObjectId(activityId);
        const activitySignups = await Signup.find({activity: activityIdString});
        activitySignups.forEach(activitySignup => {
            activitySignup.transform();
        });
        return activitySignups;
    } catch (err) {
        throw Signup.checkDuplication(err);
    }
};


// Update the signup information (for example when you have a successful application)
exports.UpdateSignup = async(signup, newData) => {
    try {

        // To ensure that only when the user is accepted then the rest of the information can be changed
        const {userDetails} = newData.userDetails;
        if (!userDetails.acceptanceIndication) {
            throw new APIError({ message: VALIDATION_ERROR, errorCode: BAD_REQUEST });
        } else if (!userDetails.completionIndication) {
            throw new APIError({ message: VALIDATION_ERROR, errorCode: BAD_REQUEST });
        }
        
        const updataData = Object.assign(signup, editedSignup);

        const saved = await updataData.save();
        return saved.transform();
    } catch (err) {
        throw Signup.checkDuplication(err);
    }
};

// Remove signup 
exports.RemoveSignup = async(signup) => {
    signup.remove();
};