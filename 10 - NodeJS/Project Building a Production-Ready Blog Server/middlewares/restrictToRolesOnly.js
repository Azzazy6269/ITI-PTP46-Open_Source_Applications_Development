const APIError = require('../utils/APIError');

//User
const restrictTo = (roles) => {
    return (req, res, next) => {
        console.log("I am inside restrictTo")
        if (!roles.includes(req.user.role)) {
            throw new APIError("Invalid User Type", 403);
        }
        next();
    }
}

//Post
const PostrestrictTo = (roles) => {
    return async (req, res, next) => {
        try {
            const isPermitted = roles.includes(req.user.role);
            console.log(`isPermitted=${isPermitted}`);
            if (isPermitted) {
                next();
            } else {
                throw new APIError("Invalid User Type", 403);
            }
        } catch (error) {
            next(error);
        }
    };
}

//Comment
const CommentrestrictTo = (roles) => {
    return async (req, res, next) => {
        try {
            const isPermitted = roles.includes(req.user.role);
            console.log(`isPermitted=${isPermitted}`);
            if (isPermitted) {
                next();
            } else {
                throw new APIError("Invalid User Type", 403);
            }
        } catch (error) {
            next(error);
        }
    };
}

module.exports = {restrictTo,PostrestrictTo,CommentrestrictTo};