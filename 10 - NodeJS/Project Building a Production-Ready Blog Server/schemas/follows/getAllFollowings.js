const Joi = require('joi');

const getAllFollowingsParams = Joi.object({
    userId: Joi.string().hex().length(24).required()
}).required();

const getAllFollowingsSchema = {
    params: getAllFollowingsParams
}

module.exports =getAllFollowingsSchema;