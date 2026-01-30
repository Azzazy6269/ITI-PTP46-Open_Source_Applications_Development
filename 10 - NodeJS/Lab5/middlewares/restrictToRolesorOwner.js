const APIError = require('../utils/APIError');
const Post = require('../models/posts');

const restrictTo = (roles) => {
    return (req, res, next) => {
        const isOwner = req.params.id && req.user.userId === req.params.id;
        if (isOwner||roles.includes(req.user.role)) {
            next();  
        }else{
            throw new APIError("Invalid User Type", 403);
        }
    }
}

const postRestrictTo = (roles) => {
    return async (req, res, next) => {
        try {
            const post = await Post.findById(req.params.id);
            if (!post) {
                next(new APIError("Post not found", 404));
            }else{
                const isOwner = post.userId.toString() === req.user.userId;
                const isAdmin = roles.includes(req.user.role);
                console.log(`Debug Auth: isOwner=${isOwner}, isAdmin=${isAdmin}, UserRole=${req.user.role}`);
                if (isOwner || isAdmin ) {
                    next();
                } else {
                    throw new APIError("Invalid User Type", 403);
                }
            }//
            
        } catch (error) {
            next(error);
        }
    };
};



module.exports = {restrictTo,postRestrictTo};