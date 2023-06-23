const User = require('./user.model')
const VolunteerOrg = require('./volunteerOrg.model')
const mongoose = require("mongoose");

const userVOSchema = new mongoose.Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    volunteerOrg: {type: Schema.Types.ObjectId, ref: 'VolunteerOrg'},
}, {timestamps: true});

const UserVO = mongoose.model('UserVO', userSchema);

module.exports = { userVOSchema };