const User = require('../models/users');
const APIError = require('../utils/APIError');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

// services before sending the verifying email
const generateResetToken =  () => {
    const resetToken = crypto.randomBytes(32).toString('hex');
    console.log("generateResetToken : successful");
    return resetToken;
}

const saveResetToken = async(userId, token) => {
    const hashedToken = crypto
        .createHash('sha256')
        .update(token)
        .digest('hex')
    ;
    console.log(userId);
    console.log(hashedToken);
    const updatedUser = await User.findByIdAndUpdate(userId, {
        passwordResetToken: hashedToken,
        passwordResetExpires: Date.now() + 15 * 60 * 1000
    });
    if (!updatedUser) {
        throw new APIError("couldn't find the user and update the resetToken", 400);
    }
    if(updatedUser)
        console.log("saveResetToken : successful");
    return updatedUser
}

//services after the user recieved the link an pressed on it
const verifyResetToken=async(token)=>{
    const hashedToken = crypto
        .createHash('sha256')
        .update(token)
        .digest('hex')
    ;
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: {$gt : Date.now()}
    });
    if(!user){
        throw new APIError("verifyResetToken error",400)
    }
    console.log("verifyResetToken : successful");
    return user;
}

const resetPassword = async(user, newPassword)=>{
    const hashedPassword =await bcrypt.hash(newPassword,12);
    const updatedUser = await User.findByIdAndUpdate(user._id, {
        password:hashedPassword,
        passwordResetToken: undefined,
        passwordResetExpires: undefined
    },{new : true});
    if(updatedUser)
        console.log("resetPassword : successful");
    return updatedUser;
}




module.exports = {generateResetToken,saveResetToken,verifyResetToken,resetPassword};