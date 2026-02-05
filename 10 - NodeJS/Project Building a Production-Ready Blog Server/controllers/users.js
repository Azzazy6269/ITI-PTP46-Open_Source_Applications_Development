const UserService = require('../services/users');
const PasswordReset = require('../services/passwordReset');
const ImageKitService = require('../services/imageKit');
const User = require('../models/users');
const APIError = require('../utils/APIError');
const sendEmailService = require("../services/email");
const bcrypt = require('bcrypt');



const signUp = async (req, res, next) => {
    try {

        const user = await UserService.signUp(req.body);
        res.status(201).json({ message: "User created successfully", data: user })
    } catch (error) {
        next(error);
    }
}


const signIn = async (req, res) => {
    const data = await UserService.signIn(req.body);
    console.log("👉👉 data", data);
    res.status(200).json({ message: "User signed in successfully", data })
}


const getAllUsers = async (req, res) => {
    const { users, pagenation } = await UserService.getAllUsers(req.query);

    res.status(200).json({ message: "Users fetched successfully", data: users, pagenation })
}


const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await UserService.getUserById(id);
    if (!user) {
        throw new APIError("User not found", 404);
    }
    res.status(200).json({ message: "User fetched successfully", data: user })
}


const updateUserById = async (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const updatedUser = await UserService.updateUserById(id, { name, email, age });
    if (!updatedUser) {
        throw new APIError("User not found", 404);
    }
    res.status(200).json({ message: "User updated successfully", data: updatedUser })
}


const deleteUserById = async (req, res) => {
    const { id } = req.params;
    const deletedUser = await UserService.deleteUserById(id);
    if (!deletedUser) {
        throw new APIError("User not found", 404);
    }
    res.status(200).json({ message: "User deleted successfully" })
}


const uploadProfileImage = async (req, res, next) => {
    try {
        if (!req.file) {
            throw new APIError("please upload an image", 400);
        }
        const fileName = `profile-${req.user.userId}-${Date.now()}`;
        const uploadResponse = await ImageKitService.uploadImage(req.file.buffer, fileName, 'profile');

        if (req.user.profilePicture?.fileId) {
            const deleteResponse = await ImageKitService.deleteImage(req.user.profilePicture.fileId);
        }
        console.log(req.user.userId);
        const updatedUser = await User.findByIdAndUpdate(
            req.user.userId,
            {
                $set: {
                    profilePicture: {
                        url: uploadResponse.url,
                        fileId: uploadResponse.fileId
                    }
                }
            },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return next(new APIError("User not found during update", 404));
        }
        res.status(200).json({ status: 'success', data: { user: updatedUser } });
    } catch (error) {
        next(error);
    }
}


const deleteProfileImage = async (req, res, next) => {
    try {
        if (req.user.profilePicture?.fileId) {
            const deleteResponse = await ImageKitService.deleteImage(req.user.profilePicture.fileId);
        }
        const userData = {
            profilePicture: {
                url: "",
                fileId: ""
            }
        }
        const updatedUser = await User.findByIdAndUpdate(req.user.userId, userData, { new: true });
        res.status(200).json({ status: 'success', data: { user: updatedUser } });
    } catch (error) {
        next(error);
    }
}


const forgotPassword = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({email});
        console.log(user);
        if(!user){
            throw new APIError("can't find user",404);
        }
        const resetToken = await PasswordReset.generateResetToken();
        const userWithToken = await PasswordReset.saveResetToken(user._id, resetToken);
        await sendEmailService.sendPasswordResetEmail(userWithToken, resetToken);
    } catch (error) {
        next(error)
    }
    res.status(200).json({ status: 'success' });
}


const resetPassword = async (req, res, next) => {
    try {
        const { token } = req.params;
        const { newPassword } = req.body;
        const user = await PasswordReset.verifyResetToken(token);
        if (!user) {
            throw new APIError("there's no user with this token OR the token is expired", 404);
        }
        const updatedUser = await PasswordReset.resetPassword(user, newPassword);
        await sendEmailService.sendPasswordResetConfirmation(updatedUser);
        res.status(200).json({ message: "User's password updated successfully", data: updatedUser })
    } catch (error) {
        next(error);
    }

}


const changePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const user = await User.findById(req.user.userId);

    const isPasswordMatched = await bcrypt.compare(currentPassword, user.password);
    if (!isPasswordMatched) {
        throw new APIError("Invalid password", 401);
    }

    const updatedUser = await PasswordReset.resetPassword(user, newPassword);
    await sendEmailService.sendPasswordResetConfirmation(updatedUser);
    res.status(200).json({ message: "User's password updated successfully", data: updatedUser })
    return updatedUser;
}


module.exports =
{
    signUp, signIn, getAllUsers, getUserById, updateUserById, deleteUserById,
    uploadProfileImage, deleteProfileImage, forgotPassword, resetPassword, changePassword
};