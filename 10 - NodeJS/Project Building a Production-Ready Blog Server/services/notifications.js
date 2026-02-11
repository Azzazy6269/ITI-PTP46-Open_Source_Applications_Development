const Notification = require('../models/notifications');
const APIError = require('../utils/APIError');



const createNotification = async(notificationData)=>{
    const notification = await Notification.create({...notificationData});
    return notification;
}

const getUserNotifications =async(userId, query)=>{
    let {page=1 , limit=10} =query;
    page =Number(page);
    limit =Number(limit);
    const notificationsPromise = Notification.find({userId}).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).populate('relatedUserId', 'name');
    const totalPromise = Notification.countDocuments({userId});
    const [notifications, total] = await Promise.all([notificationsPromise, totalPromise]);
    const pagenation = {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit)
        }
        return({notifications,pagenation})
}

const markAsRead = async(notificationId, userId)=>{
    const notification = await Notification.findOneAndUpdate({userId , _id : notificationId},{read:true},{new:true});
    return notification;
}

const markAllAsRead=async(userId)=>{
    const result = await Notification.updateMany(
        { userId: userId, read: false },
        { $set: { read: true } }
    );
    return result;
}




module.exports = {
    createNotification , getUserNotifications , markAsRead , markAllAsRead
}