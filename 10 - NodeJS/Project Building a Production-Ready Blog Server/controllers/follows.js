const FollowService = require('../services/follows');
const Follow = require('../models/follows');
const APIError = require('../utils/APIError');

const followUser = async (req, res, next) => {
    try {
        console.log(req?.params?.userId,req?.user?.userId);
        const  followingId = req.params.userId;
        const followerId = req.user.userId;
        const { followLog, message } = await FollowService.followUser(followerId, followingId);
        res.status(201).json({ message, followLog });
    } catch (error) {
        next(error);
    }
}

const unfollowUser = async (req, res, next) => {
    try {
        const followingId  = req.params.userId;
        const followerId = req.user.userId;
        const { unfollow, message } = await FollowService.unfollowUser(followerId, followingId);
        res.status(201).json({ message, unfollow });
    } catch (error) {
        next(error);
    }
}

const getAllFollowers = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { followers, message } = await FollowService.getAllFollowers(userId);
        res.status(201).json({ message, followers });
    } catch (error) {
        next(error);
    }
}

const getAllFollowings = async (req,res,next)=>{
    try {
        const { userId } = req.params;
        const { followings, message } = await FollowService.getAllFollowing(userId);
        res.status(201).json({ message, followings });
    } catch (error) {
        next(error);
    }
}

const isFollow = async (req,res,next) =>{
    try {
        const followingId  = req.params.userId;
        const followerId = req.user.userId
        const isfollow = await FollowService.isFollow(followerId, followingId);
        res.status(201).json({ "is follow ? ":isfollow});
    } catch (error) {
        next(error);
    }
}
module.exports = {
    followUser, unfollowUser , getAllFollowers , getAllFollowings , isFollow
}