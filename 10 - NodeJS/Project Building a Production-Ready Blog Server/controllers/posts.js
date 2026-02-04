const PostService = require('../services/posts');
const Post = require('../models/posts');
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
        res.status(200).json({ message: "Post fetched successfully", data: post });
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

module.exports = { createPost , getAllPosts , getPostById , updatePostById , deletePostById , uploadPostImages , deletePostImage };