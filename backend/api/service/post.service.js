const Post = require('../models/post.model');
const moment = require('moment');
const mongoose = require('mongoose');

// Create
exports.CreatePost = async (userData, postData, imageData) => {
    try {
        const postPicture = imageData;
        const pictureName = moment().format().toString() + imageData.name;
        const uploadPath = __dirname + '../../../src/postUploads/' + pictureName;
        postPicture.mv(uploadPath);

        const post = new Post({
            userData, postData,
            imageInfo: {
                imageName: pictureName,
                imagePath: uploadPath,
            }
        });

        console.log({ post: post });
        const saved = await post.save();
        console.log("here");
        return saved.transform();

    } catch (err) {
        throw Post.checkDuplication(err);
    }

};

// Get
exports.GetPost = async (id) => Post.get(id);

exports.GetPostsByUser = async (userId) => {
    try {
        const userIdString = new mongoose.Types.ObjectId(userId);
        const posts = await Post.find({ user: userIdString });
        posts.forEach(post => {
            post.transform();
        });
        return posts;
    } catch (err) {
        throw Post.checkDuplication(err);
    }
};

// Read
exports.GetPostsByLatest = async (req) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        posts.forEach(post => {
            post.transform();
        });
        return posts;
    } catch (err) {
        throw Post.checkDuplication(err);
    }
};

exports.CommunityPosts = async (filterOptions) => {
    try {
        const posts = await Post.find({ $expr: { $setIsSubset: [filterOptions, "$tags"] } });
        posts.forEach(post => {
            post.transform();
        });
        return posts;
    } catch (err) {
        throw Post.checkDuplication(err);
    }
}

// Delete
exports.RemovePost = async (post) => {
    post.deleteOne();
};