const Activity = require('./activity.model')
const User = require('./user.model')
const mongoose = require('mongoose')

const signupSchema = mongoose.Schema(
    //the following is the field
    {
        activity: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Activity'
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        userDetails:{
            acceptanceIndication: {
                type: Boolean,
                default: false
            },
            hoursCompleted: {
                type: Number,
                default: 0
            },
            completionIndication: {
                type: Boolean,
                default: false
            },
            rating: {
                type: Number
            },
            review: {
                type: String
            }
        }
    },
    {
        timestamps: true
    }
)

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;