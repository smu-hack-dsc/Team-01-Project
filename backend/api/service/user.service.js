const APIError = require('../../utils/APIError');
const User = require('../models/user.model');
const path = require('path');

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
        const postPicture = imageData;
        const pictureName = `${Date.now()}-${imageData.name}`;
        const uploadPath = path.join(__dirname + '/../../src/profileUploads/' + pictureName);

        postPicture.mv(uploadPath, error => {
            if (error) {
                throw new APIError({
                    message: "file cannot mv",
                    status: 400,
                })
            } 
        });

        var user;
        if (userData.role === 'user') {
            user = new User ({
                name: userData.name,
                password: userData.password,
                dateOfBirth: userData.dateOfBirth,
                email: userData.email,
                interests: userData.interests,
                skills: userData.skills,
                role: userData.role,
                imageInfo: {
                    imageName: pictureName,
                    imagePath: uploadPath,
                }
            });
        } else {
            user = new User ({
                name: userData.name,
                password: userData.password,
                email: userData.email,
                role: userData.role,
                imageInfo: {
                    imageName: pictureName,
                    imagePath: uploadPath,
                }
            });

        }
        const su = await user.save();
        return su.transform();
    } catch (err) {
        throw User.checkDuplication(err);
    }
};

// Get user by id
exports.GetUser = async (id) => User.get(id);


// Update user information
exports.UpdateUser = async (user, newData, imageData) => {
    try {
        // check which role it is, and compare the appropriate data
        const updateData = {};

        if (user.role === 'user') {
            const fields = ['name', 'email', 'dateOfBirth', 'skills', 'interests'];
            fields.forEach((field) => {
                updateData[field] = !newData[field] ? user[field] : newData[field];
            });
        } else {
            const fields = ['name', 'email'];
            fields.forEach((field) => {
                updateData[field] = !newData[field] ? user[field] : newData[field];
            });
        }

        if (imageData) {
            const postPicture = imageData;
            const pictureName = `${Date.now()}-${imageData.name}`;
            const uploadPath = path.join(__dirname + '/../../src/profileUploads/' + pictureName);
    
            postPicture.mv(uploadPath, error => {
                if (error) {
                    throw new APIError({
                        message: "file cannot mv",
                        status: 400,
                    })
                } 
            });

            updateData[imageInfo] = {
                imageName: pictureName,
                imagePath: uploadPath,
            };
        }
        const savedUser = await updateData.save();
        return savedUser.transform();

    } catch (err) {
        throw User.checkDuplication(err);
    }
};

// Remove user account
exports.RemoveUser = async (user) => {
    user.deleteOne();
};

