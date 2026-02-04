const LikeServices = require("../services/likes");
const Post = require('../models/posts');
const Comment = require('../models/comments');
const APIError = require("../utils/APIError");

const toggleLike = async (req, res, next) => {
    try {
        const userId = req?.user?.userId;
        const targetId = req?.params?.targetId;
        let targetType = null;
        if(req.originalUrl.includes('comments')){
            targetType = 'Comment';
        }else if(req.originalUrl.includes('posts')){
            targetType = 'Post';
        }else{
            throw new APIError(`targetType(post,comment) not found`,404);
        }

        const Model = req.originalUrl.includes('comments') ? Comment : Post;
        
        const validTargetId =await Model.exists({_id : targetId.toString()})
        if(!(validTargetId)){
            throw new APIError(`${targetType} not found`,404);
        }

        const response = await LikeServices.toggleLike(userId, targetType, targetId);

        const statusCode = response.case === 'createdLike' ? 201 : 200;
        res.status(statusCode).json({
            message: response.case === 'createdLike' ? "Liked successfully" : "Unliked successfully",
            data: response
        });

    } catch (error) {
        next(error);
    }
}

const getLikesCount = async (req, res, next) => {
    try {
        const userId = req?.user?.userId;
        const targetId = req?.params?.targetId;
        let targetType = null;
        if(req.originalUrl.includes('comments')){
            targetType = 'Comment';
        }else if(req.originalUrl.includes('posts')){
            targetType = 'Post';
        }else{
            throw new APIError(`targetType(post,comment) not found`,404);
        }

        const Model = req.originalUrl.includes('comments') ? Comment : Post;
        const validTargetId =await Model.exists({_id : targetId.toString()})
        if(!(validTargetId)){
            throw new APIError(`${targetType} not found`,404);
        }

        const response = await LikeServices.getLikesCount(targetType, targetId);
        res.status(200).json({ message: "likes fetched successfully", likesCount: response });
    } catch (error) {
        next(error);
    }
}

const isLikedByUser = async (req, res, next) => {
    try {
        const userId = req?.user?.userId;
        const targetId = req?.params?.targetId;
        let targetType = null;
        if(req.originalUrl.includes('comments')){
            targetType = 'Comment';
        }else if(req.originalUrl.includes('posts')){
            targetType = 'Post';
        }else{
            throw new APIError(`targetType(post,comment) not found`,404);
        }

        const Model = req.originalUrl.includes('comments') ? Comment : Post;
        const validTargetId = await Model.exists({_id : targetId.toString()})
        if(!(validTargetId)){
            throw new APIError(`${targetType} not found`,404);
        }

        const isLiked = await LikeServices.isLikedByUser(userId, targetType , targetId);

        res.status(200).json({ message: "like fetched successfully", isLiked });
    } catch (error) {
        next(error);
    }
}

const getUserLikes = async (req, res, next) => {
    try {
        const userId = req?.user?.userId;
        
        if(req.originalUrl.includes('comments')){
            throw new APIError(`comment shouldn't be determined not found`,404);
        }else if(req.originalUrl.includes('posts')){
            throw new APIError(`post shouldn't be determined not found`,404);
        }

        const data = await LikeServices.getUserLikes(userId, req.query);

        res.status(200).json({ message: "likes fetched successfully", data });
    } catch (error) {
        next(error);
    }
}


module.exports = { toggleLike , getLikesCount , isLikedByUser , getUserLikes}
