const User = require('../models/user.model')

// for getting the login user's info
//TODO: figure out where this is from
exports.LoginUserInfo = (req, res) => res.json(req.user.transform());

// Create user account
exports.CreateUser = async (userData) => {
    try {
        const user = new User(userData);
        const su = await user.save();
        return su.transform();
    } catch (err) {
        throw User.checkDuplication(err);
    }
};

// Get user by id
exports.GetUser = async (id) => User.get(id);

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
    user.remove();
};

