const express = require('express');
const usersController = require('../controllers/users');
const followsController = require('../controllers/follows');
const schemas = require('../schemas/users');
const followSchemas = require('../schemas/follows');
const validate = require('../middlewares/validate');
const authenticate = require('../middlewares/authenticate');
const restrictToRolesorOwner = require('../middlewares/restrictToRolesorOwner');
const restrictToRolesOnly = require('../middlewares/restrictToRolesOnly');
const imageKit = require('../middlewares/upload');

const router = express.Router();


///users/search?name=:ammadibrahe //a part of the required name
///users/search?email=:mohamed //whole the email
router.get('/search',authenticate ,validate(schemas.searchUsersSchema), usersController.searchUsers);

//forgot-password
router.post('/forgot-password' , validate(schemas.forgotPasswordSchema) , usersController.forgotPassword);

//reset-password
router.post('/reset-password/:token' , validate(schemas.resetPasswordSchema) , usersController.resetPassword);

//change-password
router.patch('/change-password' , authenticate , validate(schemas.changePasswordSchema) , usersController.changePassword);

//upload profile picture
router.post('/profile-picture',authenticate , imageKit.uploadProfile , usersController.uploadProfileImage);

//upload profile picture
router.post('/profile-picture',authenticate , imageKit.uploadProfile , usersController.uploadProfileImage);

//delete profile picture
router.delete('/profile-picture',authenticate , usersController.deleteProfileImage);

// sign up
router.post('/sign-up', validate(schemas.signUpSchema), usersController.signUp);

// sign in
router.post('/sign-in',validate(schemas.signInSchema), usersController.signIn)

// get all users
router.get('/', authenticate , restrictToRolesOnly.restrictTo(['admin']) , validate(schemas.getAllUsersSchema), usersController.getAllUsers);

//follow user
//POST /users/:userId/follow
router.post('/:userId/follow' ,authenticate, validate(followSchemas.followUserSchema) , followsController.followUser);

//unfollow user
//DELETE /users/:userId/unfollow
router.delete('/:userId/unfollow' , authenticate , validate(followSchemas.unfollowUserSchema) , followsController.unfollowUser);

//get all followers
//GET /users/:userId/followers
router.get('/:userId/followers' , authenticate , validate(followSchemas.getAllFollowersSchema) , followsController.getAllFollowers);

//get all followering
//GET /users/:userId/following
router.get('/:userId/following' , authenticate,validate(followSchemas.getAllFollowingsSchema) , followsController.getAllFollowing);

//is follow
//GET /users/:userId/isfollow
router.get('/:userId/isfollow' , authenticate,validate(followSchemas.isFollowSchema) , followsController.isFollow);

// get user by id
router.get('/:id', authenticate , restrictToRolesorOwner.restrictTo(['admin']) , usersController.getUserById);

// update user by id
router.patch('/:id', authenticate , restrictToRolesorOwner.restrictTo(['admin']) , validate(schemas.updateUserSchema), usersController.updateUserById);

// delete user by id
router.delete('/:id', authenticate , restrictToRolesorOwner.restrictTo(['admin']) , usersController.deleteUserById);




const likeRouter = require('./likes');
router.use('/:userId/likes', likeRouter);

module.exports = router;