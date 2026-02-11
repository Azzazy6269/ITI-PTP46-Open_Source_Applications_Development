const mongoose = require('mongoose');

//schema
const notificationsSchema = mongoose.Schema({
    userId:{type:mongoose.Schema.ObjectId ,ref: 'User', required:true},//recipient
    type:{type:String ,enum :['comment', 'like', 'follow', 'reply'] , required:true},
    relatedUserId:{type:mongoose.Schema.ObjectId ,ref: 'User', required:true},
    relatedPostId:{type:mongoose.Schema.ObjectId ,ref: 'Post'},
    relatedCommentId:{type:mongoose.Schema.ObjectId ,ref: 'Comment'},
    read:{type:Boolean,default:false}
},{timestamps : true}
);

//model
const Notification = mongoose.model('Notification',notificationsSchema);

module.exports = Notification;