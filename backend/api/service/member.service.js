const Member = require('../models/member.model');

// Create a membership
exports.CreateMember = async (memberData) => {
    try {
        const member = new Member(memberData);
        const saved = await member.save();
        return saved.transform();
    } catch (err) {
        throw Member.checkDuplication(err);
    }
}

//TODO: discuss if this is redundant because no extra information is kept here
//      there is a possibility that you will readjust the jwt token to give this 
//      user certain new permissions that allows them to edit the signups
// Get membership by membership id
exports.GetMembership = async(id) => Member.get(id);

// Get membership by user id
exports.GetByUser = async(userId) => {
    try {
        const userMembership = await Member.find({user: userId});
        return userMembership.transform();
    } catch (err) {
        throw Member.checkDuplication(err);
    }
};

// Get membership by volunteerOrg
exports.GetByVO = async(voId) => {
    try {
        const voMembers = await Member.find({volunteerOrg: voId});
        return voMembers.transform();
    } catch (err) {
        throw Member.checkDuplication(err);
    }
};

// Remove membership
exports.RemoveMember = async(member) => {
    member.remove();
};

// Note: there is no Update here because no additional information about
//      a user's membership with a VO is required to be recorded