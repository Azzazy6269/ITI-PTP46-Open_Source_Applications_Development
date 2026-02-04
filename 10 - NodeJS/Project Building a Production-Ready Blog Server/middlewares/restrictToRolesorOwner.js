const APIError = require('../utils/APIError');
const Post = require('../models/posts');
const Comment = require('../models/comments');


//Users
const restrictTo = (roles) => {
    return (req, res, next) => {
        console.log("I am inside restrictTo")
        const isOwner = req.params.id && req.user.userId === req.params.id;
        if (isOwner||roles.includes(req.user.role)) {
            next();  
        }else{
            throw new APIError("Invalid User Type", 403);
        }
    }
}

//Posts
const postRestrictTo = (roles) => {
    return async (req, res, next) => {
        try {
            const post = await Post.findById(req.params.id);
            if (!post) {
                next(new APIError("Post not found", 404));
            }else{
                const isOwner = post.userId.toString() === req.user.userId;
                const isPermitted = roles.includes(req.user.role);
                console.log(`Debug Auth: isOwner=${isOwner}, isPermitted=${isPermitted}, UserRole=${req.user.role}`);
                if (isOwner || isPermitted ) {
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

//Comments
const commentRestrictTo = (roles) => {
    return async (req, res, next) => {
        try {
            const comment = await Comment.findById(req.params.id);
            if (!comment) {
                next(new APIError("Comment not found", 404));
            }else{
                const post = await Post.findById(comment.postId);
                const isCommentOwner = comment.userId.toString() === req.user.userId;
                const isPermitted = roles.includes(req.user.role);
                const isPostOwner = post && roles.includes('postOwner') && post.userId.toString() == req.user.userId
                console.log(`Debug Auth: isCommentOwner=${isCommentOwner}, isPermitted=${isPermitted}, isPostOwner=${isPostOwner} , UserRole=${req.user.role}`);
                if (isCommentOwner || isPermitted || isPostOwner) {
                    next();
                } else {
                    throw new APIError("Invalid User Type", 403);
                }
            }
            
        } catch (error) {
            next(error);
        }
    };
};




module.exports = {restrictTo,postRestrictTo,commentRestrictTo};
