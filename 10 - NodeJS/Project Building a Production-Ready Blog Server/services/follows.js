const Follow = require('../models/follows');
const NotificationService = require('../services/notifications');
const User = require('../models/users');
const APIError = require('../utils/APIError');


const followUser = async(followerId,followingId)=>{
    if (followerId.toString() === followingId.toString()) {
        throw new Error("You cannot follow yourself"); 
    }
    const follower = await User.findById(followerId);
    if(!follower){
        return {followLog : null ,message:"follower not found"};
    }
    const following = await User.findById(followingId);
    if(!following){
        return {followLog : null ,message:"following not found"};
    }
    const follow = await Follow.create({followerId,followingId});

    const notificationData = {
            userId : followingId,
            relatedUserId : followerId,
            type : 'follow',
        }
    const notification = await NotificationService.createNotification(notificationData);
        
    return {followLog : follow ,notification,message:"successful proccess"};
}

const unfollowUser = async(followerId,followingId)=>{
    const unfollow = await Follow.findOneAndDelete({followerId,followingId});
    if(!unfollow){
        return {message:`unfollow failed`,unfollow};
    }
    return {message:`unfollow successful`,unfollow};
}

const getAllFollowers = async(followingId)=>{
    const followers =await Follow.find({followingId}).populate('followerId','name email');
    return {followers,message:"followers fetched successfully"};
}

const getAllFollowing = async(followerId)=>{
    const followings = await Follow.find({followerId}).populate('followingId','name email');
    return {followings , message : "followings fetched successfully"};
}

const isFollow = async(followerId,followingId)=>{
    const follow = await Follow.findOne({followerId,followingId});
    if(follow){
        return true;
    }
    return false;
}

module.exports = {
    followUser , unfollowUser , getAllFollowers , getAllFollowing , isFollow
}