const Signup = require('../models/signup.model');

// Create a signup
exports.CreateSignup = async (signupData) => {
    try {
        const signup = new Signup(signupData);
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
    const userSignups = await Signup.find({user: userId});
    return userSignups.transform();
    } catch (err) {
        throw Signup.checkDuplication(err);
    }
};

// Get signup by the activity id provided (giving back all the users that signedup for the activity)
exports.GetByActivity = async(activityId) => {
    try {
        const activitySignups = await Signup.find({activity: activityId});
        return activitySignups.transform();
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
            userDetails.hoursCompleted = 0;
            userDetails.completionIndication = false;
            userDetails.rating = null;
            userDetails.review = null;
        } 
        // Same for only when completed then the user can rate and review
        if (!userDetails.completionIndication) {
            userDetails.rating = null;
            userDetails.review = null;
        }

        const editedSignup = new Signup({activity: newData.activity, 
            user: newData.user,
            userDetails: userDetails});
        
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