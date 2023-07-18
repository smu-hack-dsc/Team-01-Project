// UPDATED: YES
// API TESTING:
// VALIDATIONS:
// TODO: 
const mongoose = require('mongoose');

const APIError = require('../../utils/APIError');
const {
  NO_RECORD_FOUND, NOT_FOUND,
  BAD_REQUEST, VALIDATION_ERROR,
  USER_REGISTERED,
} = require('../../utils/constants');

const signupSchema = mongoose.Schema(
    //the following is the field
    {
        activity: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Activity',
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
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
            }
        }
    },
    {
        timestamps: true
    }
);

// Restrict the composite primary key and give it the name 'activity_user'
signupSchema.index({ activity: 1, user: 1 }, { unique: true, name: 'signup_pri_key' });

signupSchema.method({

    // Format for all singup returns: activityId, userId, userdetails
    transform() {
        const transformed = {};
        const fields = ['activity', 'user', 'userDetails'];
        fields.forEach((field) => {
            transformed[field] = this[field];
        });

        return transformed;
    },
});

signupSchema.static({
    // Get signup
    async get(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new APIError({
                message: VALIDATION_ERROR,
                errorCode: NOT_FOUND,
            });
        }

        const signup = await this.findById(id).exec();
        if (!signup) throw new APIError({ message: NO_RECORD_FOUND, errorCode: NOT_FOUND });
        return signup;
    },
    // Return Validation Error
    // If error is a mongoose duplication key error
    checkDuplication(error) {
        if (error.code === 11000 && (error.name === 'BulkWriteError' || error.name === 'MongoError')) {
            const keys = Object.keys(error.keyPattern);
            if (keys.includes('signup_pri_key')) {
                return new APIError({
                    message: USER_REGISTERED,
                    errorCode: BAD_REQUEST,
                });
            }
        }
        return error;
    },

});

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;