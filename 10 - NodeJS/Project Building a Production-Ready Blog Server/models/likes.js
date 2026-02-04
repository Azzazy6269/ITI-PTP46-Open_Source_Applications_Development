const mongoose = require('mongoose');


const likesSchema = mongoose.Schema({
    userId : {type:mongoose.Schema.ObjectId , ref : 'User' , required : true},
    targetType : {type:String ,enum : ['Post', 'Comment'], required : true},
    targetId : {type:mongoose.Schema.ObjectId , required : true},
},{timestamps : true}
);

const Like = mongoose.model('Like',likesSchema);

likesSchema.index({ userId: 1, targetType: 1, targetId: 1 }, { unique: true });

module.exports = Like;