const Joi = require('joi');

const getAllFollowersParams = Joi.object({
    userId: Joi.string().hex().length(24).required()
}).required();

const getAllFollowersSchema = {
    params: getAllFollowersParams
}

module.exports = getAllFollowersSchema;