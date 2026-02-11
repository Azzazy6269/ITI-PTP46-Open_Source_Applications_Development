const Joi = require('joi');

const createBookMarkParams = Joi.object({
    postId: Joi.string().hex().length(24).required()
}).required();

const createBookMarkSchema = {
    params: createBookMarkParams
}

module.exports = createBookMarkSchema;