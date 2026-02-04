const Joi = require('joi');

const updateCommentBody = Joi.object({
    content: Joi.string().min(1).max(1000).required(),
}).required();

const createCommentParams = Joi.object({
    id: Joi.string().hex().length(24).required()
}).required();


const updateCommentSchema = {
    body: updateCommentBody,
    params:createCommentParams
}

module.exports = updateCommentSchema;