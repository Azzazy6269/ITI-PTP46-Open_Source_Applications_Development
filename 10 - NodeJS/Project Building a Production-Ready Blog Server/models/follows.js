const mongoose = require('mongoose');


const followsSchema = mongoose.Schema({
    followerId : {type:mongoose.Schema.ObjectId , ref : 'User' , required : true},
    followingId : {type:mongoose.Schema.ObjectId , ref : 'User' ,required : true},
},{timestamps : true}
);

const Follow = mongoose.model('Follow',followsSchema);
followsSchema.index({ followerId: 1, followingId: 1 }, { unique: true });

module.exports = Follow;