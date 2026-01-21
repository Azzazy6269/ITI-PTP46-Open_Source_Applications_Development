const express = require('express');
const usersController = require('../controllers/users');
const schemas = require('../schemas');
const validate = require('../middlewares/validate');
const authenticate = require('../middlewares/authenticate');
const restrictTo = require('../middlewares/restrictTo');

const router = express.Router();


// sign up
router.post('/sign-up', validate(schemas.signUpSchema), usersController.signUp);

// sign in
router.post('/sign-in',validate(schemas.signInSchema), usersController.signIn)

// get all users
router.get('/', authenticate , restrictTo(['admin']) , validate(schemas.getAllUsersSchema), usersController.getAllUsers);

// get user by id
router.get('/:id', authenticate , restrictTo(['admin']) , usersController.getUserById);

// update user by id
router.patch('/:id', authenticate , restrictTo(['admin']) , validate(schemas.updateUserSchema), usersController.updateUserById);

// delete user by id
router.delete('/:id', authenticate , restrictTo(['admin']) , usersController.deleteUserById);


module.exports = router;