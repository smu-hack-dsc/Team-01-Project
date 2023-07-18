// UPDATED: YES
// API TESTING: YES
// VALIDATIONS:
// TODO: 

const mongoose = require('mongoose');

const APIError = require('../../utils/APIError');
const {
    SKILLS, INTERESTS,
    NO_RECORD_FOUND, NOT_FOUND,
    BAD_REQUEST, VALIDATION_ERROR,
    USER_REGISTERED, USER_VO_MEMBER
} = require('../../utils/constants');

const activitySchema = mongoose.Schema(
    //the following is the field
    {
        activityName: {
            type: String,
            required: true
        },
        requiredSkills: [{
            type: String,
            enum: SKILLS
        }],
        categories: [{
            type: String, 
            enum: INTERESTS
        }],
        beginDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        organiserId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        description: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

activitySchema.index({ organiser: 1, activityName: 1, beginDate: 1 }, { unique: true, name: 'activity_pri_key' });

activitySchema.method({

    // Format for all membership returns: name of User, name of VolunteerOrg
    transform() {
        const transformed = {};
        const fields = ['activityName', 'requiredSkills', 'category', 'beginDate', 'endDate', 'organiserId', 'description'];
        fields.forEach((field) => {
            transformed[field] = this[field];
        });

        return transformed;
    },
});

activitySchema.static({
    // Get member
    async get(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new APIError({
                message: VALIDATION_ERROR,
                errorCode: NOT_FOUND,
            });
        }

        const activity = await this.findById(id).exec();
        if (!activity) throw new APIError({ message: NO_RECORD_FOUND, errorCode: NOT_FOUND });
        return activity;
    },

    // Return Validation Error
    // If error is a mongoose duplication key error
    checkDuplication(error) {
        if (error.code === 11000 && (error.name === 'BulkWriteError' || error.name === 'MongoError')) {
            const keys = Object.keys(error.keyPattern);
            if (keys.includes('member_pri_key')) {
                return new APIError({
                    message: USER_REGISTERED,
                    errorCode: BAD_REQUEST,
                });
            }
        }
        return error;
    },

});


const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;