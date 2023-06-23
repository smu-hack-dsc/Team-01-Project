const Activity = require('./activity.model')
const mongoose = require('mongoose')


const volunteerOrgSchema = mongoose.Schema(
    //the following is the field
    {
        volunteerOrg: {
            type: String,
            required: true
        },
        volunteerOrgEmail: {
            type: String,
            required: true,
            match: /.+\@.+\..+/
        },
        memberEmails: [
            {
                email: {
                    type: String,
                    required: true,
                    unique: true,
                    match: /.+\@.+\..+/
                },
                password: {
                    type: String,
                    required: true
                }
            }
        ],
        activities: [
            {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'Activity'
            }
        ],
    },
    {
        timestamps: true
    }
)

const VolunteerOrg = mongoose.model('VolunteerOrg', volunteerOrgSchema);

module.exports = VolunteerOrg;