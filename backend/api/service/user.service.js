const APIError = require('../../utils/APIError');
const User = require('../models/user.model')

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
        const pictureName = moment().format().toString() + imageData.name;
        const uploadPath = __dirname + '../../../src/profileUploads/' + pictureName ;
        postPicture.mv(uploadPath, (err) => {
            throw new APIError({
                message: "file cannot mv",
                status: 404,
            })
        });

        const user = new User({
            userData, 
            imageInfo: {
                imageName: pictureName,
                imagePath: uploadPath,
            }
        });
        
        const su = await user.save();
        return su.transform();
    } catch (err) {
        throw User.checkDuplication(err);
    }
};

// Get user by id
exports.GetUser = async (id) => User.get(id);

exports.LogoutUser = async(payload) => {
    try {
        User.unauthorize(payload);
        next();
    } catch (err) {
        throw User.checkDuplication(err);
    }
}

// Update user information
exports.UpdateUser = async (user, newData) => {
    try {

        // Compare data between the orig user and with the new Info in newData
        const updateData = Object.assign(user, newData);
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

