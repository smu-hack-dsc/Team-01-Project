const Member = require('../models/member.model');

// Create a membership
exports.CreateMember = async (memberData) => {
    try {
        
        const user = new mongoose.Types.ObjectId(memberData.user);        
        const volunteerOrg = new mongoose.Types.ObjectId(memberData.volunteerOrg);
        const member = new Member({user, volunteerOrg});
        const saved = await member.save();
        return saved.transform();
    } catch (err) {
        throw Member.checkDuplication(err);
    }
}

// Get membership by membership id
exports.GetMembership = async(id) => Member.get(id);

// Get membership by user id
exports.GetByUser = async(userId) => {
    try {
        const userMemberships = await Member.find({user: userId});
        
        userMemberships.forEach(userMembership => {
            userMembership.transform();
        });
        return userMemberships;
    } catch (err) {
        throw Member.checkDuplication(err);
    }
};

// Get membership by volunteerOrg
exports.GetByVO = async(voId) => {
    try {
        const voMembers = await Member.find({volunteerOrg: voId});
        voMembers.forEach(voMember => {
            voMember.transform();
        });
        return voMembers;
    } catch (err) {
        throw Member.checkDuplication(err);
    }
};

// Remove membership
exports.RemoveMember = async(member) => {
    member.remove();
};
