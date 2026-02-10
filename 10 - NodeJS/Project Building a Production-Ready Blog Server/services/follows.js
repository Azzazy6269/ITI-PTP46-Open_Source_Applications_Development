const Follow = require('../models/follows');
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
    return {followLog : follow ,message:"successful proccess"};
}

const unfollowUser = async(followerId,followingId)=>{
    const unfollow = Follow.findOneAndDelete({followerId,followingId});
    return {message:`unfollow successful`,unfollow};
}

const getAllFollowers = async(followingId)=>{
    const followers = Follow.find({followingId}).populate('followerId','name email');
    return {followers,message:"followers fetched successfully"};
}

const getAllFollowings = async(followerId)=>{
    const followings = Follow.find({followerId}).populate('followingId','name email');
    return {followings , message : "followings fetched successfully"};
}

const isFollow = async(followerId,followingId)=>{
    const follow = Follow.find({followerId,followingId});
    if(follow){
        return true;
    }
    return false;
}

module.exports = {
    followUser , unfollowUser , getAllFollowers , getAllFollowings , isFollow
}