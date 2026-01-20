const PostService = require('../services/posts');
const APIError = require('../utils/APIError');

const createPost =async (req,res) =>{
    const post = await PostService.createdPost(req.body);
    res.status(201).json({ message: "Post created successfully", data: post })
}

const getAllPosts = async (req,res)=>{
    const {posts , pagenation} = await PostService.getAllPosts(req.query);
    res.status(201).json({ message: "Posts fetched successfully", data: posts, pagenation })
} 

const getPostById =async (req,res)=>{
    const {id} = req.params;
    const post = await PostService.getPostById(id)
    if(!post){
        throw new APIError("Post not found",404);
    }
    res.status(201).json({ message: "Post fetched successfully", data: post })
}

const updatePostById = async (req,res)=>{
    const {id} = req.params;
    const { title, content, author,tags, published} = req.body;
    const updatesPost = await PostService.findOneAndUpdate({ _id: id }, { title, content, author,tags, published}, { new: true });
    if(!updatesPost){
        throw new APIError("Post not found",404);
    }
    res.status(201).json({ message: "Post updated successfully", data: updatesPost })
}

const deletePostById = async (req, res) => {
    const { id } = req.params;
    const deletedPost = await PostService.deletePostById(id);
    if (!deletedPost) {
        throw new APIError("Post not found", 404);
    }
    res.status(200).json({ message: "Post deleted successfully" })
}

module.exports = { createPost , getAllPosts , getPostById ,updatePostById ,deletePostById};