const Joi = require('joi');

const schema = {
    query: Joi.object({
        page: Joi.number().min(1),
        limit: Joi.number().min(1).max(100),
        title: Joi.string().min(1).max(200),
        content: Joi.string().min(1).max(500),
        dateStart : Joi.date(),
        dateEnd : Joi.date(),
        tags : Joi.array().items(Joi.string()).single().optional()
    }).or('title','content')
}

module.exports = schema;