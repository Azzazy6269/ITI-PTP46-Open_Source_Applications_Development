const Joi = require('joi');

const schema = {
    params: Joi.object({
        postId: Joi.string().hex().length(24).required()
    }),
}

module.exports = schema;