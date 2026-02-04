const mongoose = require('mongoose');

//schema
const commentsSchema = mongoose.Schema({
    content:{type:String , required:true,min:1 , max:1000},
    userId:{type:mongoose.Schema.ObjectId ,ref: 'User', required:true},
    postId:{type:mongoose.Schema.ObjectId ,ref: 'Post', required:true},
    parentCommentId:{type:mongoose.Schema.ObjectId ,ref: 'Comment'},
    likes:{type:Number , default:0},
    isEdited:{type:Boolean ,default:false},
    editedAt:{type:Date},
},{timestamps : true}
);

//model
const Comment = mongoose.model('Comment',commentsSchema);

module.exports = Comment;