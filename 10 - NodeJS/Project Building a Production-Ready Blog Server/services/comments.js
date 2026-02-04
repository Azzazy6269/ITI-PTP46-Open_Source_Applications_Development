const Comment = require("../models/comments");
const Post = require("../models/posts");
const User = require("../models/users")
const APIError = require("../utils/APIError");
const { sendCommentNotification ,sendReplyNotification } = require('../services/email');

//create comment or reply
const createComment = async (commentData, userId)=>{
    const {parentCommentId , postId} = commentData;
    if(parentCommentId){
        const response = await Comment.findById(parentCommentId);
        if(!response){
            console.log("parentComment not found");
            throw new APIError("parentComment not found",404);
        }
        const createdComment = await Comment.create({ ...commentData, userId });
        const replier = await User.findById(userId);
        const parentComment = await Comment.findById(parentCommentId).populate('userId');
        await sendReplyNotification(parentComment.userId.email, replier, parentComment, createdComment);
        return createdComment;
    }
    const post = await Post.findById(postId).populate('userId');
    if (!post) throw new APIError("Post not found", 404);
    const createdComment = await Comment.create({ ...commentData, userId });
    const commenter = await User.findById(userId);
    await sendCommentNotification(post.userId.email, commenter, post, createdComment);

    return createdComment;
}

//get all comments
const getAllComments = async(query, postId, userId)=>{
    let {page , limit} = query;
    page = Number(page);
    limit = Number(limit);
    const CommentPromise = Comment.find().skip((page - 1) * limit).limit(limit).populate('postId', 'title content userId');
    const totalPromise = Comment.countDocuments();
    const [comments, total] = await Promise.all([CommentPromise, totalPromise]);
    const commentsWithOwnership = comments.map(comment => {
        const commentObj = comment.toObject();
        if(commentObj.userId && userId &&commentObj.userId.toString() === userId.toString()){
            commentObj.isOwner =true;
        }else{
            commentObj.isOwner =false;
        }
        return commentObj;
    });
    const pagenation ={
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit)
    };
    return{
        comments : commentsWithOwnership,
        pagenation
    };
}

//get comments by postId
const getCommentsByPost = async (postId, userId)=>{
    const comments =await Comment.find({postId}).populate('postId', 'title content userId');
    const commentsWithOwnership = comments.map(comment => {
        const commentObj = comment.toObject();
        if(commentObj.userId && userId &&commentObj.userId.toString() === userId.toString()){
            commentObj.isOwner =true;
        }else{
            commentObj.isOwner =false;
        }
        return commentObj;
    });
    return commentsWithOwnership;
}

// get comment by id
const getCommentById =async (id, userId)=>{
    const comment =await Comment.findOne({_id : id}).populate('userId','name email');
    if(!comment){
        return null;
    }
    const commentObj = comment.toObject();
    if(commentObj.userId.toString() === userId.toString()){
            commentObj.isOwner =true;
        }else{
            commentObj.isOwner =false;
        }
    return commentObj;
}

//update comment by id
const updateCommentById = async (id, commentData, userId)=>{
    const updatedComment = await Comment.findByIdAndUpdate(
    id, 
    { ...commentData, isEdited: true, editedAt: Date.now() }, 
    { new: true }
);
    return updatedComment;
}

//delete comment by id 
const deleteCommentById = async(id, userId)=>{
    //const comment = await Comment.findById(id);
    const deletedComment = await Comment.findOneAndDelete({_id : id});
    return deletedComment;
}



module.exports={createComment ,getAllComments ,getCommentsByPost,getCommentById ,updateCommentById,deleteCommentById}
