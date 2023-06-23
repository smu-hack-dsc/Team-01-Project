const mongoose = require('mongoose')

const activitySchema = mongoose.Schema(
    //the following is the field
    {
        activityName: {
            type: String,
            required: true
        },
        requiredSkills: [{
            type: Schema.Types.ObjectId, ref: 'skill'
        }],
        category: [{
                type: Schema.Types.ObjectId, ref: 'interest'
        }],
        dates: [{
            //to confirm date type
        }],
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