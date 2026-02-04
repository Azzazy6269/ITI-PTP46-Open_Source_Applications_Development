const UserService = require('../services/users');
const ImageKitService = require('../services/imageKit');
const User = require('../models/users');
const APIError = require('../utils/APIError');


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
        const updatedUser = await User.findByIdAndUpdate(req.user.userId , userData, { new: true });
        res.status(200).json({ status: 'success', data: { user: updatedUser } });
    } catch (error) {
        next(error);
    }
}

module.exports = { signUp, signIn, getAllUsers, getUserById, updateUserById, deleteUserById, uploadProfileImage, deleteProfileImage };