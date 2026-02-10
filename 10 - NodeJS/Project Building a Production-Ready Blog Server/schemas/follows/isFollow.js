const Joi = require('joi');

const isFollowParams = Joi.object({
    userId: Joi.string().hex().length(24).required()
}).required();

const isFollowSchema = {
    params: isFollowParams
}

module.exports = isFollowSchema;