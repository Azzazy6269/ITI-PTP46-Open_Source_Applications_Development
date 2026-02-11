const express = require('express');
const notificationsController = require('../controllers/notifications');
const schemas = require('../schemas/notifications');
const validate = require('../middlewares/validate');
const authenticate = require('../middlewares/authenticate');
const restrictToRolesorOwner = require('../middlewares/restrictToRolesorOwner');
const restrictToRolesOnly = require('../middlewares/restrictToRolesOnly');
const router = express.Router();


//get user notifications
router.get('/', authenticate, validate(schemas.getUserNotificationsSchema), notificationsController.getUserNotifications)

//mark as read
router.patch('/:notificationId/read',authenticate,validate(schemas.markAsReadSchema), notificationsController.markAsRead)

//mark all as read
router.patch('/read-all',authenticate, notificationsController.markAllAsRead)

module.exports = router;