const Post = require('../models/posts');

// create post
const createPost = async (postData) =>{
    const createdPost = await Post.create(postData);
    return createdPost;
}

//get all posts
const getAllPosts = async (query,authenticatedUserId)=>{
    let { page , limit} = query;
    page = Number(page);
    limit = Number(limit);
    const postsPromise = Post.find().skip((page - 1) * limit).limit(limit).populate('userId', 'name email');
    const totalPromise = Post.countDocuments();
    const [posts, total] = await Promise.all([postsPromise, totalPromise]);
    const postsWithOwnership = posts.map(post => {
        const postObj = post.toObject();
        postObj.isOwner = post.userId && post.userId._id.toString() === authenticatedUserId.toString();
        return postObj;
    });
    const pagenation = {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    return {posts : postsWithOwnership , pagenation};
};

//get post by ID
const getPostById = async (id,authenticatedUserId)=>{
    const post =await Post.findOne({_id : id}).populate('userId','name email');
    if(!post){
        return null;
    }
    const postObj = post.toObject();
    postObj.isOwner = post.userId && post.userId._id.toString() === authenticatedUserId.toString();
    return postObj;
}

//update post by id
const updatePostById = async (id,postData,authenticatedUserId)=>{
    const post = await Post.findById(id);
    if(!post){
        return null
    }
    if (post.userId.toString() !== authenticatedUserId.toString()) {
        throw new APIError("You are not authorized to update this post", 403);
    }
    const updatedPost = await Post.findByIdAndUpdate(id, postData, { new: true });
    return updatedPost;
}

//delete user by id
const deletePostById = async (id,authenticatedUserId)=>{
    const post = await Post.findById(id);
    if(!post){
        return null
    }
    if (post.userId.toString() !== authenticatedUserId.toString()) {
        throw new APIError("You are not authorized to delete this post", 403);
    }
    const deletedPost = await Post.findOneAndDelete({_id : id});
    return deletedPost;
}


module.exports = { createPost, getAllPosts, getPostById, updatePostById, deletePostById };