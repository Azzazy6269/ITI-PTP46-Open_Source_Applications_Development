const BookMark = require('../models/bookmarks');
const APIError = require('../utils/APIError')


const bookMarkPost = async(userId , postId)=>{
    let bookMark = await BookMark.findOne({userId,postId});
    if(bookMark){
        throw new APIError("bookmark is already exist",400)
    }
    bookMark = await BookMark.create({userId , postId});
    return {message : "bookmark created successfully",bookMark}
}

const removeBookMark = async(userId , postId)=>{    
    const bookMark = await BookMark.findOneAndDelete({userId , postId});
    if(!bookMark){
        throw new APIError("bookmark isn't exist",404)
    }
    return {message : "bookmark was deleted successfully",bookMark};
}

const getUserBookMarks = async(userId)=>{
    const bookMarks = await BookMark.find({userId});
    return {message : "bookmarks fetched successfully",bookMarks};
}


module.exports =
{
    bookMarkPost , removeBookMark , getUserBookMarks
}