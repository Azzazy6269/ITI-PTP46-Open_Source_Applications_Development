const Joi = require('joi');

const createLikeParams = Joi.object({
    targetId: Joi.string().hex().length(24).required()
}).required();

const createLikeSchema = {
    params: createLikeParams
}

module.exports = createLikeSchema;