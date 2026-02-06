/*module.exports = {
    signUpSchema: require('./signUpSchema'),
    signInSchema: require('./signInSchema'),
    getAllUsersSchema: require('./getAllUsersSchema'),
    updateUserSchema: require('./updateUserSchema')
}*/

const signUpSchema = require('./signUpSchema'); 
const signInSchema = require('./signInSchema');
const updateUserSchema = require('./updateUserSchema');
const getAllUsersSchema = require('./getAllUsersSchema');
const forgotPasswordSchema = require('./forgotPasswordSchema');
const resetPasswordSchema = require('./resetPasswordSchema');
const changePasswordSchema = require('./changePasswordSchema');
const searchUsersSchema = require('./searchUsersSchema');

module.exports = {
    signUpSchema,
    signInSchema,
    updateUserSchema,
    getAllUsersSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
    changePasswordSchema,
    searchUsersSchema
};