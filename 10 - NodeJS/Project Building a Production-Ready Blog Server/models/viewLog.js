const mongoose = require('mongoose');


const viewLogSchema = mongoose.Schema({
    userId : {type:mongoose.Schema.ObjectId , ref : 'User' , required : true},
    postId : {type:mongoose.Schema.ObjectId , ref : 'Post' , required : true},
},{timestamps : true}
);

const View = mongoose.model('View',viewLogSchema);

viewLogSchema.index({ userId: 1, postId: 1 }, { unique: true });

module.exports = View;