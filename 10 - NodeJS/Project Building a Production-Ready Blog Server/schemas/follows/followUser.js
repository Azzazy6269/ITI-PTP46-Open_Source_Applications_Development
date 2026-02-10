const Joi = require('joi');

const followUserParams = Joi.object({
    userId: Joi.string().hex().length(24).required()
}).required();

const followUserSchema = {
    params: followUserParams
}

module.exports = followUserSchema;