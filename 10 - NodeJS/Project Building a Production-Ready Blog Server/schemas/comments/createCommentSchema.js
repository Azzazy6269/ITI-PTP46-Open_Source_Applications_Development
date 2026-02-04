const Joi = require('joi');

const createCommentBody = Joi.object({
    content: Joi.string().min(1).max(1000).required(),
    parentCommentId: Joi.string().hex().length(24)
}).required();

const createCommentParams = Joi.object({
    postId: Joi.string().hex().length(24).required()
}).required();

const createCommentSchema = {
    body: createCommentBody,
    params: createCommentParams
}

module.exports = createCommentSchema;