const mongoose = require('mongoose')

const activitySchema = mongoose.Schema(
    //the following is the field
    {
        activityName: {
            type: String,
            required: true
        },
        requiredSkills: [{ //TODO: ref to the new skills collection
            type: String
        }],
        category: [{ //TODO: ref to the new interest collection
                type: String
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