const Post = require('../models/post.model');
const moment = require('moment');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Create
exports.CreatePost = async (userData, postData, imageData) => {
    try {
        const postPicture = imageData;
        const pictureName = /*moment().format().toString() + */imageData.name;
        const uploadPath = path.join(__dirname + '/../../src/postUploads/' + pictureName);


        postPicture.mv(uploadPath, error => {
            if (error) {
                throw new APIError({
                    message: "file cannot mv",
                    status: 400,
                })
            } 
        });

        const post = new Post({
            user: userData.id,
            postTitle: postData.postTitle,
            postContent: postData.postContent,
            tags: postData.tags,
            imageInfo: {
                imageName: pictureName,
                imagePath: uploadPath,
            }
        });

        // console.log({ post: post });
        const saved = await post.save();
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