const User = require('../models/users');
const APIError = require('../utils/APIError');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const sendEmail = require("./email");


const generateResetToken =  () => {
    const resetToken = crypto.randomBytes(32).toString('hex');
    return resetToken;
}

const saveResetToken = async(userId, token) => {
    const hashedToken = crypto
        .createHash('sha256')
        .update(token)
        .digest('hex')
    ;
    const updatedUser = await User.findByIdAndUpdate(userId, {
        passwordResetToken: hashedToken,
        passwordResetExpires: Date.now() + 15 * 60 * 1000
    });
    if (!updatedUser) {
        throw new APIError("couldn't find and update the user resetToken", 400);
    }

    return resetToken
}

const verifyResetToken=async(token)=>{
    const hashedToken = crypto
        .createHash('sha256')
        .update(token)
        .digest('hex')
    ;
    const updatedUser = await User.find({
        passwordResetToken: hashedToken,
        passwordResetExpires: {$lte : Date.now()}
    });
    if(!updatedUser){
        throw new APIError("verifyResetToken error",400)
    }
    return updatedUser;
}

const resetPassword = async(user, newPassword)=>{
    const hashedPassword =await bcrypt.hash(newPassword,12);
    const updatedUser = await User.findByIdAndUpdate(user.userId, {
        password:hashedPassword,
        passwordResetToken: undefined,
        passwordResetExpires: undefined
    });
    return updatedUser;
}


module.exports = {generateResetToken,saveResetToken,verifyResetToken,resetPassword};