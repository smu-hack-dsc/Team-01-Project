const User = require('./user.model')
const Activity = require('./volunteerOrg.model')
const mongoose = require("mongoose");

const userActivitySchema = new mongoose.Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    activity: {type: Schema.Types.ObjectId, ref: 'Activity'},
}, {timestamps: true});

const UserActivity = mongoose.model('UserActivity', userActivitySchema);

module.exports = { userVOSchema };