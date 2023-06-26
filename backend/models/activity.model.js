const Skill = require('./skill.model')
const Interest = require('./interest.model')
const VolunteerOrg = require('./volunteerOrg.model')
const mongoose = require('mongoose')

const activitySchema = mongoose.Schema(
    //the following is the field
    {
        activityName: {
            type: String,
            required: true
        },
        requiredSkills: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Skill'
        }],
        category: [{
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Interest'
        }],
        dates: [{
            //to confirm date type
        }],
        organiser: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'VolunteerOrg'
        },
        description: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;