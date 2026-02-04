const Post = require('../models/posts');
const APIError = require('../utils/APIError');

// create post
const createPost = async (postData) =>{
    const createdPost = await Post.create(postData);
    return createdPost;
}

//get all posts
const getAllPosts = async (query)=>{
    let { page , limit} = query;
    page = Number(page);
    limit = Number(limit);
    const postsPromise = Post.find().skip((page - 1) * limit).limit(limit).populate('userId', 'name email');
    const totalPromise = Post.countDocuments();
    const [posts, total] = await Promise.all([postsPromise, totalPromise]);
    const postsWithOwnership = posts.map(post => {
        const postObj = post.toObject();
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
const getPostById = async (id)=>{
    const post =await Post.findOne({_id : id}).populate('userId','name email');
    if(!post){
        return null;
    }
    const postObj = post.toObject();
    return postObj;
}

//update post by id
const updatePostById = async (id,postData)=>{
    const post = await Post.findById(id);
    if(!post){
        return null
    }
    const updatedPost = await Post.findByIdAndUpdate(id, postData, { new: true });
    return updatedPost;
}

//delete post by id
const deletePostById = async (id)=>{
    const post = await Post.findById(id);
    if(!post){
        return null
    }
    const deletedPost = await Post.findOneAndDelete({_id : id});
    return deletedPost;
}


module.exports = { createPost, getAllPosts, getPostById, updatePostById, deletePostById };