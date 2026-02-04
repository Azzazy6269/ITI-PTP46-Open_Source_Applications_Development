const CommentService = require('../services/comments');
const APIError = require('../utils/APIError');

const createComment = async (req, res, next) => {
    try {
        const CommentData = { ...req.body, ...req.params };
        const comment = await CommentService.createComment(CommentData , req?.user?.userId );
        res.status(201).json({ message: "comment created successfully", data: comment });
    } catch (error) {
        next(error);
    }
}

const getAllComments = async(req, res, next)=>{
    try {
        const comment = await CommentService.getAllComments(req.query , req?.params?.postId , req?.user?.userId );
        res.status(200).json({ message: "Comments fetched successfully", data: comment });
    } catch (error) {
        next(error);
    }
}

const getCommentsByPost = async (req, res, next)=>{
    try {
        const comment = await CommentService.getCommentsByPost(req?.params?.postId , req?.user?.userId );
        res.status(200).json({ message: "comments fetched successfully", data: comment });
    } catch (error) {
        next(error);
    }
};

const getCommentById = async (req, res, next)=>{
    try {
        const comment = await CommentService.getCommentById(req?.params?.id , req?.user?.userId );
        if(req.params.postId && comment.postId.toString() !== req.params.postId){
            throw new APIError("This comment does not belong to this post", 400);
        }
        res.status(200).json({ message: "comment fetched successfully", data: comment });
    } catch (error) {
        next(error);
    }
};

const updateCommentById = async (req, res, next)=>{
    try {
        const comment = await CommentService.updateCommentById(req?.params?.id , req?.body , req?.user?.userId );
        if(!comment){
            throw new APIError("comment not found",404);
        }
        if(req.params.postId && comment.postId.toString() !== req.params.postId){
            throw new APIError("This comment does not belong to this post", 400);
        }
        res.status(200).json({ message: "comment updated successfully", data: comment });
    } catch (error) {
        next(error);
    }
}

const deleteCommentById = async (req, res, next)=>{
    try {
        const comment = await CommentService.deleteCommentById(req?.params?.id , req?.user?.userId );
        if(!comment){
            throw new APIError("comment not found",404);
        }
        if(req.params.postId && comment.postId.toString() !== req.params.postId){
            throw new APIError("This comment does not belong to this post", 400);
        }
        res.status(200).json({ message: "comment deleted successfully", data: comment });
    } catch (error) {
        next(error);
    }
}

module.exports={createComment,getAllComments,getCommentsByPost,getCommentById,updateCommentById,deleteCommentById}