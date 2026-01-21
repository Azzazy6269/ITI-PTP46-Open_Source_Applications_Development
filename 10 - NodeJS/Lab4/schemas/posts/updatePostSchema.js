const Joi = require('joi');

const updatedPostBodySchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(200).required(),
    content: Joi.string().alphanum().min(10),
    author: Joi.string().alphanum().min(2).max(100),
    tags: Joi.array().items(Joi.string()),
    published: Joi.boolean().default(false),
    likes: Joi.number().min(0).default(0)
}).required();

const updatePostParamsSchema = Joi.object({
    id: Joi.string().hex().length(24).required(),
}).required();
// 24 char hex => 0-9 ,a-f

const schema = {
    body: updatedPostBodySchema,
    params: updatePostParamsSchema,
}

module.exports = schema;