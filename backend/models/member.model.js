const User = require('./user.model')
const VolunteerOrg = require('./volunteerOrg.model')
const mongoose = require('mongoose')

const memberSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        volunteerOrg: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }

    }
)

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;