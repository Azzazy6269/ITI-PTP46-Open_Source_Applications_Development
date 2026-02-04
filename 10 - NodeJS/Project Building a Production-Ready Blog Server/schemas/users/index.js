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

module.exports = {
    signUpSchema,
    signInSchema,
    updateUserSchema,
    getAllUsersSchema,
};