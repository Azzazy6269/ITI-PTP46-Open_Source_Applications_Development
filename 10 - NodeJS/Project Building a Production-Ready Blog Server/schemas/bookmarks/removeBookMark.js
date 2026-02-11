const Joi = require('joi');

const removeBookMarkParams = Joi.object({
    postId: Joi.string().hex().length(24).required()
}).required();

const removeBookMarkSchema = {
    params: removeBookMarkParams
}

module.exports = removeBookMarkSchema;