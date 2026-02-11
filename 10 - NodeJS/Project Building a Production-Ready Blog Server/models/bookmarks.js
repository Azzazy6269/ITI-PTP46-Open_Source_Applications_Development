const mongoose = require('mongoose');


const bookmarksSchema = mongoose.Schema({
    userId : {type:mongoose.Schema.ObjectId , ref : 'User' , required : true},
    postId : {type:mongoose.Schema.ObjectId , ref : 'Post' ,required : true},
},{timestamps : true}
);

bookmarksSchema.index({ userId: 1, postId: 1 }, { unique: true });

const BookMark = mongoose.model('BookMark',bookmarksSchema);


module.exports = BookMark;