const APIError = require('../../utils/APIError');
const User = require('../models/user.model');
const path = require('path');

const { S3Client, PutObjectCommand, GetObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
require('dotenv').config();


const bucketName = process.env.BUCKET_NAME
const bucketRegion = process.env.BUCKET_REGION
const accessKey = process.env.ACCESS_KEY
const secretAccessKey = process.env.SECRET_ACCESS_KEY

const s3 = new S3Client({
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretAccessKey
    },
    region: bucketRegion
});

// for getting the jwt token when the user logins
exports.LoginUserInfo = async (options) => {
    try {
        const { user, accessToken } = await User.ValidateUserAndGenerateToken(options);
        return { user, accessToken };
    } catch (err) {
        throw User.checkDuplication(err);
    }
}

// Create user account
exports.CreateUser = async (userData, imageData) => {
    try {

        let pictureName;
        if (imageData) {
            pictureName = `${Date.now()}-${imageData.name}`;
            const params = {
                Bucket: bucketName,
                Key: imageData.pictureName,
                Body: imageData.buffer,
                ContentType: imageData.mimetype,
            };
            const command = new PutObjectCommand(params);
            await s3.send(command);

        }

        var user;
        if (userData.role === 'user') {
            user = new User({
                name: userData.name,
                password: userData.password,
                dateOfBirth: userData.dateOfBirth,
                email: userData.email,
                interests: userData.interests,
                skills: userData.skills,
                role: userData.role,
                description: userData.description,
                imageInfo: {
                    imageName: pictureName,
                }
            });
        } else {
            user = new User({
                name: userData.name,
                password: userData.password,
                email: userData.email,
                interests: userData.interests,
                role: userData.role,
                description: userData.description,
                imageInfo: {
                    imageName: pictureName,
                }
            });

        }
        const su = await user.save();
        return su.transform();
    } catch (err) {
        throw User.checkDuplication(err);
    }
};

// exports.FindUserEmail = async(email) => {
//     try {
//         const foundUser = User.findOne({email: email});
//         if (!foundUser) return true;
//         return false;
//     } catch (error) {
//         throw User.checkDuplication(err);
//     }
// }
// Get user by id
exports.GetUser = async (id) => {
    const user = await User.get(id);

    const getObjectParams = {
        Bucket: bucketName,
        Key: user.imageInfo.imageName,
    };

    const command = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(s3, command, { expiresIn: 60 });
    user.imageUrl = url;
    return user;
}


// Update user information
exports.UpdateUser = async (user, newData, imageData) => {
    try {
        // check which role it is, and compare the appropriate data
        const updateData = {};

        if (user.role === 'user') {
            const fields = ['name', 'email', 'dateOfBirth', 'skills', 'interests', 'description'];
            fields.forEach((field) => {
                updateData[field] = !newData[field] ? user[field] : newData[field];
            });
        } else {
            const fields = ['name', 'email', 'description', 'interests'];
            fields.forEach((field) => {
                updateData[field] = !newData[field] ? user[field] : newData[field];
            });
        }
        // for image updating
        if (imageData) {
            const path = userData.imageInfo?.imageName ? userData.imageInfo.imageName : `${Date.now()}-${imageData.name}`;
            const params = {
                Bucket: bucketName,
                Key: imageData.pictureName,
                Body: imageData.buffer,
                ContentType: imageData.mimetype,
            };
            const command = new PutObjectCommand(params);
            await s3.send(command);
        }
        Object.assign(user, updateData);
        const savedUser = await user.save();
        return savedUser.transform();

    } catch (err) {
        throw User.checkDuplication(err);
    }
};

// Remove user account
exports.RemoveUser = async (user) => {
    if (user.imageInfo) {
        const params = {
            Bucket: bucketName,
            Key: user.imageInfo.imageName
        }
        const command = new DeleteObjectCommand(params);
        await s3.send(command);
    }
    user.deleteOne();
};

