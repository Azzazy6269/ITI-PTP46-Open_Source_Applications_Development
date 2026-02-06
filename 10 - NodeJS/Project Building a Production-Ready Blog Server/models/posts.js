const { ref } = require('joi');
const mongoose = require('mongoose');

//schema
const postsSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.ObjectId ,ref: 'User', required:true},
    title:{type:String , required:true , min:3},
    content:{type:String , required:true},
    //author:{type:String , required:true},
    tags:{type:[String]},
    status : {type:String,enum: ['published', 'scheduled','draft'] , default:'published'},
    publishedAt:{type:Date}, 
    likes:{type:Number , default:0},
    views: {
        type: Number,
        default: 0
    },
    images: [
    {
        url: { type: String, required: true },
        fileId: { type: String, required: true }
    }]
},{timestamps : true}
);

//model
const Post = mongoose.model('Post',postsSchema);

module.exports = Post;