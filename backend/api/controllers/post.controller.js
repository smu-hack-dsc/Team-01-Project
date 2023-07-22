const { CREATED } = require("../../utils/constants");
const { CreatePost, GetPost,
        GetPostsByUser, GetPostsByLatest,
        RemovePost } = require("../service/post.service");


exports.create = async (req, res, next) => {
    try {
        const response = await CreatePost(req.user, req.body, req.files.image);
        return res.json({data: response});
    } catch (error) {
        return next(error);
    }
}

// Get all the posts
exports.getLatest = async (req, res, next) => {
    try {
        const response = await GetPostsByLatest(req);
        return res.json({data: response});
    } catch (error) {
        return next(error);
    }
} 

// Return all posts under the user
exports.getByUser = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const response = await GetPostsByUser(userId);
        return res.json({ data: response, success: 'SUCCESS' });
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