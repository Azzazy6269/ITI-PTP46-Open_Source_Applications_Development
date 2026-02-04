const Like = require("../models/likes");
const Post = require('../models/posts');
const Comment = require('../models/comments');

const toggleLike = async (userId, targetType, targetId) => {
    const isLiked = await Like.findOne({ userId, targetType, targetId });
    const Model = targetType === 'Post' ? Post : Comment;
        if (isLiked) {
        await Like.deleteOne({ userId, targetType, targetId });
        await Model.findByIdAndUpdate(targetId, { $inc: { likesCount: -1 } });
        return { case: "deletedLike", data: isLiked }; 
    } else {
        const createdLike = await Like.create({ userId, targetType, targetId });
        await Model.findByIdAndUpdate(targetId, { $inc: { likesCount: 1 } });
        return { case: "createdLike", data: createdLike };
    }
};


const getLikesCount = async(targetType, targetId)=>{
    const docsCount = await Like.countDocuments({targetType, targetId});
    return docsCount;
}



const isLikedByUser = async(userId, targetType, targetId)=>{
    const isLiked = await Like.findOne({userId, targetType, targetId});
    if(isLiked){
        return true;
    } 
    return false;
}



const getUserLikes =async (userId, query) =>{
     let {page , limit} = query;
    page = Number(page);
    limit = Number(limit);
    const LikePromise = Like.find({userId}).skip((page - 1) * limit).limit(limit);
    const totalPromise = Like.countDocuments({userId});
    const [likes, total] = await Promise.all([LikePromise, totalPromise]);
    const pagenation ={
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
    };
    return{
        likes,
        pagenation
    };
}



module.exports ={toggleLike , getLikesCount , isLikedByUser , getUserLikes}