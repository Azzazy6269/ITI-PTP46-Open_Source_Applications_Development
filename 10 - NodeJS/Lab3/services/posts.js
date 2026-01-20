const Post = require('../models/posts');

// create post
const createdPost = async (postData) =>{
    const createdPost = await Post.create(postData);
    return createdPost;
}

//get all posts
const getAllPosts = async (query)=>{
    let { page , limit} = query;
    page = Number(page);
    limit = Number(limit);
    const postsPromise = Post.find().skip((page - 1) * limit).limit(limit);
    const totalPromise = Post.countDocuments();
    const [posts, total] = await Promise.all([postsPromise, totalPromise]);
    const pagenation = {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    return {posts , pagenation};
}

//get post by ID
const getPostById = async (id)=>{
    const post =await Post.findOne({_id : id});
    if(!post){
        return null;
    }
    return post;
}

//update post by id
const updatePostById = async (id,postData)=>{
    const updatedPost = await Post.findOneAndUpdate({ _id: id },postData, { new: true });
    if (!updatedPost) {
        return null;
    }
    return updatedPost;
}

//delete user by id
const deletePostById = async (id)=>{
    const deletedPost = await Post.findOneAndDelete({_id : id});
    if(!deletedPost){
        return null;
    }
    return deletedPost;
}


module.exports = { createdPost, getAllPosts, getPostById, updatePostById, deletePostById };