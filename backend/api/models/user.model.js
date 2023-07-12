// UPDATED: YES
// API TESTING: YES
// VALIDATIONS:
// TODO: 
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const moment = require('moment');
const jwt = require('jsonwebtoken');

const APIError = require('../../utils/APIError');
const {
  ROLES, SKILLS, INTERESTS, BADGES,
  NO_RECORD_FOUND, NOT_FOUND,
  BAD_REQUEST, VALIDATION_ERROR,
  INVALID_CREDENTIALS,
  UNAUTHORIZED,
  EMAIL_EXIST,
} = require('../../utils/constants');

require('dotenv').config();

const userSchema = mongoose.Schema(
    //the following is the field
    {
        name: {
            // normal users will just have to write their first name and last name together :D
            // volunteer orgs will write their organisation name there
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minlength: 8
        },
        dateOfBirth: {
            // TODO: make the business logic such that a normal user MUST place their date-of-birth 
            //       on the other hand, volunteer orgs dont have to 
            type: Date, //YYYY-MM-DD
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: /.+\@.+\..+/,
            trim: true
        },

        // these are fields that will be present only for users
        interests: [{
            type: String, 
            enum: INTERESTS
        }],
        skills: [{
            type: String,
            enum: SKILLS
        }],
        badges: [{
            type: String,
            enum: BADGES
        }],

        //  to determine if the user is a volunteer org or not
        // --> for authorization later on
        role: {
            type: String,
            enum: ROLES,
            default: 'user',
        }
    },
    {
        timestamps: true
    }
);

// Pre-save hook to encrypt password
userSchema.pre('save', async function save(next) {
    try {
        if (!this.isModified('password')) return next();

        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        return next();
    } catch (err) {
        return next(err);
    }

});

//so that you can ensure database integrity
userSchema.pre('remove', async function (next) {
    try {
        const userId = this._id;

        // Deleting activity documents that reference the user
        await Activity.deleteMany({ organiser: userId });

        // TODO: determine if this should be deleted because it could be ex-data
        // Deleting signup documents that reference the user
        await Signup.deleteMany({ user: userId });

        // Deleting member documents that reference the user
        await Member.deleteMany({ user: userId });
        await Member.deleteMany({ volunteerOrg: userId });

        // Proceed to the next hook or remove operation
        return next();
    } catch (err) {
        return next(err)
    }
});

userSchema.method({

    // Format for all user returns: id, name, email and role
    transform() {
        const transformed = {};
        const fields = ['id', 'name', 'email', 'role'];
        fields.forEach((field) => {
            transformed[field] = this[field];
        });

        return transformed;
    },

    // Create the token for jwt authentication
    token() {
        const payload = {
            exp: moment().add(process.env.JWT_EXPIRATION_MINUTES, 'minutes').unix(), //expiration
            iat: moment().unix(), //issued at
            sub: this._id, //subject
        };
        return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
    },

    // Check the password using bcrypt because it was encrypted during the pre.save method
    async matchPassword(password) {
        return bcrypt.compare(password, this.password);
    },
});

userSchema.statics = {
    // Get user
    async get(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new APIError({
                message: VALIDATION_ERROR,
                errorCode: NOT_FOUND,
            });
        }
        const user = await this.findById(id);
        if (!user) throw new APIError({ message: NO_RECORD_FOUND, errorCode: NOT_FOUND });
        return user;
    },

    // Validate the user's email and password
    // And generate a JWT token
    async ValidateUserAndGenerateToken(options) {
        const email = options.email;
        const password = options.password;
        const user = await this.findOne({ email: email });
        if (!user) {
            throw new APIError({ message: INVALID_CREDENTIALS, errorCode: UNAUTHORIZED });
        }
        if (!await user.matchPassword(password)) {
            throw new APIError({ message: INVALID_CREDENTIALS, errorCode: UNAUTHORIZED });
        }
        return { user: user.transform(), accessToken: user.token() };
    },

    // Return Validation Error
    // If error is a mongoose duplication key error
    checkDuplication(error) {
        if (error.code === 11000 && (error.name === 'BulkWriteError' || error.name === 'MongoError')) {
            const keys = Object.keys(error.keyPattern);
            if (keys.includes('email')) {
                return new APIError({
                    message: EMAIL_EXIST,
                    errorCode: BAD_REQUEST,
                });
            }
        }
        return error;
    },
};

const User = mongoose.model('User', userSchema);

module.exports = User;