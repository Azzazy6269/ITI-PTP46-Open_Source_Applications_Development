const Post = require('../models/posts');
const View = require('../models/viewLog');
const APIError = require('../utils/APIError');

// create post
const createPost = async (postData) =>{
    const createdPost = await Post.create(postData);
    return createdPost;
}

//get all posts
const getAllPosts = async (query,userId)=>{
    let { page , limit} = query;
    page = Number(page);
    limit = Number(limit);
    const postsPromise = Post.find().skip((page - 1) * limit).limit(limit).populate('userId', 'name email');
    const totalPromise = Post.countDocuments();
    const [posts, total] = await Promise.all([postsPromise, totalPromise]);
    const postsWithOwnership = posts.map(post => {
        const postObj = post.toObject();
        if(postObj.userId?._id.toString()===userId.toString()){
            postObj["isOwner"] = true;
        }else{
            postObj["isOwner"] = false;
        }
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
const getPostById = async (postId,userId)=>{
    let post =await Post.findOne({_id:postId , status:'published'}).populate('userId','name email');
    if(!post){
        return null;
    }
    const viewLog = await View.findOne({userId,postId});

    if(viewLog){
        return post;
    }else{
        post =await Post.findByIdAndUpdate(postId,{ $inc: { views: 1 } },{new : true}).populate('userId','name email');
        const view = await View.create({userId,postId});
    }    
    return post;

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

//search post by title
const searchPostByTitle = async(userId,title,query)=>{
    let { page , limit , dateStart ,dateEnd ,tags} = query;
    //let {} = body;
    page = Number(page);
    limit = Number(limit);
    const searchQuery = { title: { $regex: title, $options: 'i' } };
    if(tags){
        searchQuery.tags = tags;
    }
    else if(dateStart && dateEnd){
        searchQuery["createdAt"] = {$gt : dateStart , $lt : dateEnd} ;
    }
    else if(dateStart){
        searchQuery["createdAt"] = {$gt : dateStart} ;
    }
    else if(dateEnd){
        searchQuery["createdAt"] = {$lt : dateEnd} ;
    }
    const postsPromise = Post.find(searchQuery).skip((page - 1) * limit).limit(limit);
    const totalPromise = Post.countDocuments(searchQuery);
    const [posts , total] = await Promise.all([postsPromise,totalPromise]);
    const postsWithOwnership = posts.map(post => {
        const postObj = post.toObject();
        if(postObj.userId?._id.toString()===userId.toString()){
            postObj["isOwner"] = true;
        }else{
            postObj["isOwner"] = false;
        }
        return postObj;
    });
    const pagenation = {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    return {posts : postsWithOwnership , pagenation};
}

//search post by content
const searchPostByContent = async(userId,content,query )=>{
    let { page , limit,dateStart , dateEnd , tags} = query;
    //let {}= body;
    page = Number(page);
    limit = Number(limit);
    const searchQuery = { content: { $regex: content, $options: 'i' } };
    if(tags){
        searchQuery.tags = tags;
    }
    if(dateStart && dateEnd){
        searchQuery["createdAt"] = {$gt : dateStart , $lt : dateEnd} ;
    }
    else if(dateStart){
        searchQuery["createdAt"] = {$gt : dateStart} ;
    }
    else if(dateEnd){
        searchQuery["createdAt"] = {$lt : dateEnd} ;
    }
    const postsPromise = Post.find(searchQuery).skip((page - 1) * limit).limit(limit);
    const totalPromise = Post.countDocuments(searchQuery);
    const [posts , total] = await Promise.all([postsPromise,totalPromise]);
    const postsWithOwnership = posts.map(post => {
        const postObj = post.toObject();
        if(postObj.userId?._id.toString()===userId.toString()){
            postObj["isOwner"] = true;
        }else{
            postObj["isOwner"] = false;
        }
        return postObj;
    });
    const pagenation = {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    return {posts : postsWithOwnership , pagenation};
}

//get scheduled posts
const getScheduledPosts = async(userId , query)=>{
    let { page , limit} = query;
    page = Number(page);
    limit = Number(limit);
    const postsPromise = Post.find({status:'scheduled' ,userId }).skip((page - 1) * limit).limit(limit);
    const totalPromise = Post.countDocuments({status:'scheduled' ,userId });
    const [posts, total] = await Promise.all([postsPromise, totalPromise]);

    const pagenation = {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    return {posts , pagenation};
}

//get published posts
const getPublishedPosts = async(userId , query)=>{
    let { page , limit} = query;
    page = Number(page);
    limit = Number(limit);
    const postsPromise = Post.find({status:'published' ,userId }).skip((page - 1) * limit).limit(limit);
    const totalPromise = Post.countDocuments({status:'published' ,userId});
    const [posts, total] = await Promise.all([postsPromise, totalPromise]);

    const pagenation = {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    return {posts , pagenation};
}

//get draft posts
const getDraftPosts = async(userId , query)=>{
    let { page , limit} = query;
    page = Number(page);
    limit = Number(limit);
    const postsPromise = Post.find({status:'draft' ,userId }).skip((page - 1) * limit).limit(limit);
    const totalPromise = Post.countDocuments({status:'draft' ,userId });
    const [posts, total] = await Promise.all([postsPromise, totalPromise]);

    const pagenation = {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
    return {posts , pagenation};
}

module.exports = 
{ createPost, getAllPosts, getPostById, updatePostById, deletePostById, searchPostByTitle, 
    searchPostByContent, getScheduledPosts ,getPublishedPosts ,getDraftPosts
};