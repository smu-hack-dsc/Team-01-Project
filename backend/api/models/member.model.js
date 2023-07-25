// // UPDATED: YES
// // API TESTING: CHECK IF WE STILL NEED TO GET THIS DONE
// // VALIDATIONS:
// // TODO: 
// const mongoose = require('mongoose');

// const APIError = require('../../utils/APIError');
// const {
//   NO_RECORD_FOUND, NOT_FOUND,
//   BAD_REQUEST, VALIDATION_ERROR,
//   USER_REGISTERED, USER_VO_MEMBER
// } = require('../../utils/constants');

// const User = require('./user.model');

// const memberSchema = mongoose.Schema(
//     {
//         user: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref:'user',
//             required: true
//         },
//         volunteerOrg: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref:'user',
//             required: true
//         }
//     }
// );

// memberSchema.index({user: 1, volunteerOrg: 1}, {unique: true, name: 'member_pri_key'});

// // Pre-save hook to ensure that the user is different from the VO
// //TODO: check if this should be parked under bizlogic or a presave hook
// memberSchema.pre('save', async function save(next) {
//     try {
//         if (this.user === this.volunteerOrg) {
//             throw new APIError({
//                 message: USER_VO_MEMBER,
//                 errorCode: BAD_REQUEST
//             });
//         }
//         return next();
//     } catch (err) {
//         return next(err);
//     }
// });

// memberSchema.method({

//     // Format for all membership returns: name of User, name of VolunteerOrg
//     transform() {
//         const transformed = {};
//         const fields = ['userId', 'volunteerOrgId'];
//         fields.forEach((field) => {
//             transformed[field] = User.findOne({id: this[field]});
//         });

//         return transformed;
//     },
// });

// memberSchema.static({
//     // Get member
//     async get(id) {
//         if (!mongoose.Types.ObjectId.isValid(id)) {
//             throw new APIError({
//                 message: VALIDATION_ERROR,
//                 errorCode: NOT_FOUND,
//             });
//         }

//         const member = await this.findById(id).exec();
//         if (!member) throw new APIError({ message: NO_RECORD_FOUND, errorCode: NOT_FOUND });
//         return member;
//     },

//     // Return Validation Error
//     // If error is a mongoose duplication key error
//     checkDuplication(error) {
//         if (error.code === 11000 && (error.name === 'BulkWriteError' || error.name === 'MongoError')) {
//             const keys = Object.keys(error.keyPattern);
//             if (keys.includes('member_pri_key')) {
//                 return new APIError({
//                     message: USER_REGISTERED,
//                     errorCode: BAD_REQUEST,
//                 });
//             }
//         }
//         return error;
//     },

// });

// const Member = mongoose.model('Member', memberSchema);

// module.exports = Member;