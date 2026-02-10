const PostService = require('../services/posts');
const Post = require('../models/posts');
const User = require('../models/users');
const ImageKitService = require('../services/imageKit');
const APIError = require('../utils/APIError');

const createPost = async (req, res, next) => {
    try {
        const postData = { ...req.body, userId: req.user.userId };
        const post = await PostService.createPost(postData);
        res.status(201).json({ message: "Post created successfully", data: post });
    } catch (error) {
        next(error);
    }
}

const getAllPosts = async (req, res, next) => {
    try {
        const { posts, pagenation } = await PostService.getAllPosts(req.query, req.user.userId);
        res.status(201).json({ message: "Posts fetched successfully", data: posts, pagenation })
    } catch (error) {
        next(error);
    }
}

const getPostById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await PostService.getPostById(id, req.user.userId);
        if (!post) {
            throw new APIError("Post not found", 404);
        }
        res.status(200).json({ message: "Post fetched successfully . if it's the first time for the user to see this post the view should be increased automatically",
             data: post });
    } catch (error) {
        next(error);
    }
}

const updatePostById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatesPost = await PostService.updatePostById(id, req.body, req.user.userId);
        if (!updatesPost) {
            throw new APIError("Post not found", 404);
        }
        res.status(201).json({ message: "Post updated successfully", data: updatesPost })

    } catch (error) {
        next(error);
    }
}

const deletePostById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedPost = await PostService.deletePostById(id, req.user.userId);
        if (!deletedPost) {
            throw new APIError("Post not found", 404);
        }
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        next(error);
    }
}

const uploadPostImages = async (req, res, next) => {
    try {
        if (!req.files || req.files.length === 0) {
            return next(new APIError("Please upload at least one image", 400));
        }
        const uploadPromises = req.files.map((file, index) => {
            const fileName = `post-${req.params.id}-${Date.now()}-${index}`;
            return ImageKitService.uploadImage(file.buffer, fileName, 'posts');
        });
        const uploadResults = await Promise.all(uploadPromises);

        const newImages = uploadResults.map(result => ({
            url: result.url,
            fileId: result.fileId
        }));

        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { $push: { images: { $each: newImages } } }, 
            { new: true }
        );

        res.status(200).json({ status: 'success', data: { post: updatedPost } });
    } catch (error) {
        next(error);
    }
}

const deletePostImage = async (req, res, next) => {
    try {
        const { id, fileId } = req.params; 
        await ImageKitService.deleteImage(fileId);
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { $pull: { images: { fileId: fileId } } }, 
            { new: true }
        );
        if (!updatedPost) {
            return next(new APIError("Post not found", 404));
        }
        res.status(200).json({ status: 'success', data: { post: updatedPost } });
    } catch (error) {
        next(error);
    }
}

const searchPosts = async(req,res ,next) =>{
    try{
        const {title,content} = req.query;
        let posts,pagenation;
        if(title){
            ({posts,pagenation} = await PostService.searchPostByTitle(req.user.userId , title, req.query ,req.body));

        }else if(content){
            ({posts,pagenation} = await PostService.searchPostByContent(req.user.userId , content,req.query ,req.body));

        }else{
            res.status(400).json({ message: "you have to enter title or content to search with", data: posts, pagenation })
            return;
        }
        res.status(201).json({ message: "Posts fetched successfully", data: posts, pagenation })


    }catch(error){
        next(error)
    }
}

const getScheduledPosts = async(req,res,next)=>{
    try{
        ({posts,pagenation} = await PostService.getScheduledPosts(req.user.userId , req.query));
        res.status(201).json({ message: "Posts fetched successfully", data: posts, pagenation });
    }catch(error){
        next(error);
    }
}

const getPublishedPosts = async(req,res,next)=>{
    try{
        const user = User.findById(req.params.userId);
        if(!user){
            throw new APIError("user not found",404);
        }
        ({posts,pagenation} = await PostService.getPublishedPosts(req.params.userId , req.query));
        res.status(201).json({ message: "Posts fetched successfully", data: posts, pagenation });
    }catch(error){
        next(error);
    }
}

const getDraftPosts = async(req,res,next)=>{
    try{
        ({posts,pagenation} = await PostService.getDraftPosts(req.user.userId , req.query));
        res.status(201).json({ message: "Posts fetched successfully", data: posts, pagenation });
    }catch(error){
        next(error);
    }
}

const IncresePostViewById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const {post,message} = await PostService.IncresePostViewById(id, req.user.userId);
        if (!post) {
            throw new APIError("Post not found", 404);
        }
        res.status(200).json({ message, data: post });
    } catch (error) {
        next(error);
    }
}

module.exports = { createPost , getAllPosts , getPostById , updatePostById , deletePostById , uploadPostImages , deletePostImage ,
    searchPosts , getScheduledPosts , getPublishedPosts , getDraftPosts , IncresePostViewById
};