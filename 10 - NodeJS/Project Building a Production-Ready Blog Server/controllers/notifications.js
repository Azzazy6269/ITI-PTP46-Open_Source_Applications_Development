const notificationService = require('../services/notifications');
const APIError = require('../utils/APIError');


const getUserNotifications = async(req,res,next)=>{
    try{
        const {notifications,pagenation} = await notificationService.getUserNotifications(req.user.userId , req.query)
        res.status(200).json({ notifications, pagenation });
    }catch(error){
        next(error);
    }
}

const markAsRead = async(req,res,next)=>{
    try{
        const notification = await notificationService.markAsRead(req.params.notificationId,req.user.userId)
        res.status(200).json({ notification });
    }catch(error){
        next(error);
    }
}

const markAllAsRead=async(req,res,next)=>{
    try{
        const notifications = await notificationService.markAllAsRead(req.user.userId)
        res.status(200).json({ notifications });
    }catch(error){
        next(error);
    }
}
module.exports = {
    getUserNotifications , markAsRead , markAllAsRead
}