const Post = require('../models/post.model');
const moment = require('moment');
const mongoose = require('mongoose');
// const fs = require('fs');
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

// Create
exports.CreatePost = async (userData, postData, imageData) => {
    try {
        let pictureName;
        if (imageData) {
            pictureName = `${Date.now()}-${imageData.name}`;
            const params = {
                Bucket: bucketName,
                Key: pictureName,
                Body: imageData.data.buffer,
                ContentType: imageData.mimetype,
            };
            const command = new PutObjectCommand(params);
            await s3.send(command);
        }
        const post = new Post({
            user: userData.id,
            postTitle: postData.postTitle,
            postContent: postData.postContent,
            tags: postData.tags,
            imageInfo: {
                imageName: pictureName,
            }
        });
        const saved = await post.save();
        return saved.transform();

    } catch (err) {
        throw Post.checkDuplication(err);
    }

};

// Get
exports.GetPost = async (id) => {
    const post = await Post.get(id);

    if (post.imageInfo.imageName) {
        const getObjectParams = {
            Bucket: bucketName,
            Key: post.imageInfo.imageName,
        };

        const command = new GetObjectCommand(getObjectParams);
        const url = await getSignedUrl(s3, command, { expiresIn: 60 });
        post.imageInfo.imagePath = url;
    }
    post.transform()
    return post;
};

exports.GetPostsByUser = async (userId) => {
    try {
        const userIdString = new mongoose.Types.ObjectId(userId);
        const posts = await Post.find({ user: userIdString });
        for (const post of posts) {
            if (post.imageInfo.imageName) {
                const getObjectParams = {
                    Bucket: bucketName,
                    Key: post.imageInfo.imageName,
                };

                const command = new GetObjectCommand(getObjectParams);
                const url = await getSignedUrl(s3, command, { expiresIn: 60 });
                post.imageInfo.imagePath = url;
            }
            post.transform()
        }
        return posts;
    } catch (err) {
        throw Post.checkDuplication(err);
    }
};

// Read
exports.GetPostsByLatest = async (req) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        for (const post of posts) {
            if (post.imageInfo.imageName) {
                const getObjectParams = {
                    Bucket: bucketName,
                    Key: post.imageInfo.imageName,
                };

                const command = new GetObjectCommand(getObjectParams);
                const url = await getSignedUrl(s3, command, { expiresIn: 60 });
                post.imageInfo.imagePath = url;
            }
            post.transform()
        }
        return posts;
    } catch (err) {
        throw Post.checkDuplication(err);
    }
};

exports.CommunityPosts = async (filterOptions) => {
    try {
        const posts = await Post.find({ $expr: { $setIsSubset: [filterOptions, "$tags"] } });
        for (const post of posts) {
            if (post.imageInfo.imageName) {
                const getObjectParams = {
                    Bucket: bucketName,
                    Key: post.imageInfo.imageName,
                };

                const command = new GetObjectCommand(getObjectParams);
                const url = await getSignedUrl(s3, command, { expiresIn: 60 });
                post.imageInfo.imagePath = url;
            }
            post.transform();
        }
        return posts;
    } catch (err) {
        throw Post.checkDuplication(err);
    }
}

// Delete
exports.RemovePost = async (post) => {
    post.deleteOne();
};