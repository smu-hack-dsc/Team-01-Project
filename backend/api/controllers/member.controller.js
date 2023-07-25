// const {
//     CreateMember,
//     GetMembership, GetByUser, GetByVO,
//     RemoveMember
// } = require('../service/member.service');

// const { CREATED } = require('../../utils/constants');

// // Return information of the membership using the id
// exports.get = async (req, res) => {
//     try {
//         const response = await GetMembership(req.params);
//         return res.json({data: response, success: 'SUCCESS'});
//     } catch (error) {
//         return next(error);
//     }
// };

// // Return information of the membership under a user
// exports.getUnderUser = async(req, res) => {
//     try {
//         const response = await GetByUser(req.body.userId);
//         return res.json({data: response, success: 'SUCCESS'});
//     } catch (error) {
//         return next(error);
//     }
// };

// // Return information of members under a VO
// exports.getUnderVO = async (req, res) => {
//     try {
//         const response = await GetByVO(req.body.voId);
//         return res.json({data: response, success: 'SUCCESS'});
//     } catch (error) {
//         return next(error);

//     }
// };

// // Create membership
// exports.create = async (req, res, next) => {
//     try {
//         const response = await CreateMember(req.body);
//         return res.status(CREATED).json({ data: response, success: 'SUCCESS' });
//     } catch (error) {
//         return next(error);
        
//     }
// };

// // Delete a membership
// exports.remove = async (req, res, next) => {
//     try {
//         const { member } = req.body;
//         await RemoveMember(member);
//         res.status(203).end();
//     } catch (error) {
//         next(error);
//     }
// };