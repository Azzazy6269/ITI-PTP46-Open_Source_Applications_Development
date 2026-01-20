const mongoose = require('mongoose');

//schema
const postsSchema = mongoose.Schema({
    title:{type:String , required:true},
    content:{type:String , required:true},
    author:{type:String , required:true},
    tags:{type:[String]},
    published:{type:Boolean , default:false},
    likes:{type:Number , default:0},
},{timestamps : true}
);

//model
const Post = mongoose.model('Post',postsSchema);

module.exports = Post;