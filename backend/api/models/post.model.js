const mongoose = require('mongoose');

const APIError = require('../../utils/APIError');
const {
    SKILLS, INTERESTS,
    NO_RECORD_FOUND, NOT_FOUND, POST_MADE_BEFORE,
    BAD_REQUEST, VALIDATION_ERROR,
    USER_REGISTERED, USER_VO_MEMBER
} = require('../../utils/constants');

const postSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        activity: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        location: {
            type: String,
        },
        postContent: {
            type: String,
            required: true
        },
        imageInfo: {
            imageName: {
                type: String,
            },
            imagePath: {
                type: String,
            },
        }
    },
    {
        timestamps: true
    });

postSchema.index({ user: 1, activity: 1, postContent: 1 }, { unique: true, name: 'post_pri_key' });

postSchema.method({

    // Format for all membership returns: name of User, name of VolunteerOrg
    transform() {
        const transformed = {};
        const fields = ['id', 'user', 'activity', 'postContent', 'location', 'imageInfo'];
        fields.forEach((field) => {
            transformed[field] = this[field];
        });

        return transformed;
    },
});

postSchema.static({
    // Get member
    async get(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new APIError({
                message: VALIDATION_ERROR,
                errorCode: NOT_FOUND,
            });
        }

        const post = await this.findById(id).exec();
        if (!post) throw new APIError({ message: NO_RECORD_FOUND, errorCode: NOT_FOUND });
        return post;
    },

    // Return Validation Error
    // If error is a mongoose duplication key error
    checkDuplication(error) {
        if (error.code === 11000 && (error.name === 'BulkWriteError' || error.name === 'MongoError')) {
            const keys = Object.keys(error.keyPattern);
            if (keys.includes('post_pri_key')) {
                return new APIError({
                    message: POST_MADE_BEFORE,
                    errorCode: BAD_REQUEST,
                });
            }
        }
        return error;
    },

});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;