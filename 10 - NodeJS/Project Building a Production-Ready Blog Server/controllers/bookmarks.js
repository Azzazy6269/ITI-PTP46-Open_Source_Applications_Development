const BookMarksService = require('../services/bookmarks');
const APIError = require('../utils/APIError');

const bookMarkPost =async(req,res,next)=>{
    const userId = req.user.userId ;
    const postId = req.params.postId ;
    try{
        const {bookMark , message} = await BookMarksService.bookMarkPost(userId,postId);
        res.status(201).json({ message, bookMark });
    }catch(error){
        next(error);
    }
}

const removeBookMark =async(req,res,next)=>{
    const userId = req.user.userId ;
    const postId = req.params.postId ;
    try{
        const {bookMark , message} = await BookMarksService.removeBookMark(userId,postId);
        res.status(201).json({ message, bookMark });
    }catch(error){
        next(error);
    }
}

const getUserBookMarks =async(req,res,next)=>{
    const userId = req.user.userId ;
    try{
        const {bookMarks , message} = await BookMarksService.getUserBookMarks(userId);
        res.status(201).json({ message, bookMarks });
    }catch(error){
        next(error);
    }
}

module.exports = {
    bookMarkPost , removeBookMark , getUserBookMarks
}