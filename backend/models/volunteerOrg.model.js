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
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const VolunteerOrg = mongoose.model('VolunteerOrg', volunteerOrgSchema);

module.exports = VolunteerOrg;