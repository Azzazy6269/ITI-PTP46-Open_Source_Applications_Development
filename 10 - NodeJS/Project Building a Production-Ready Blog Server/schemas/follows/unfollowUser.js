const Joi = require('joi');

const unfollowUserParams = Joi.object({
    userId: Joi.string().hex().length(24).required()
}).required();

const unfollowUserSchema = {
    params: unfollowUserParams
}

module.exports = unfollowUserSchema;