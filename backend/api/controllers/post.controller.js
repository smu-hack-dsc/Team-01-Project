const { CREATED } = require("../../utils/constants");
const { CreatePost, GetPost,
        GetPostsByUser, GetPostsByLatest, CommunityPosts,
        RemovePost } = require("../service/post.service");


exports.create = async (req, res, next) => {
    try {
        const response = await CreatePost(req.user, req.body, req.files?.image);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
}

// Get all the posts
exports.getLatest = async (req, res, next) => {
    try {
        const response = await GetPostsByLatest(req);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
} 

// Return all posts under the user
exports.getByUser = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const response = await GetPostsByUser(userId);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
}

exports.communitiesFilter = async (req, res, next) => {
    try {
        const response = await CommunityPosts(req.body.tags);
        return res.json(response);
    } catch (error) {
        return next(error);
    }
}

// Delete a post
exports.remove = async (req, res, next) => {
    try {
        const post = await GetPost(req.params.postId);
        await RemovePost(post);
        return res.status(203).end();
    } catch (error) {
        return next(error);
    }
}