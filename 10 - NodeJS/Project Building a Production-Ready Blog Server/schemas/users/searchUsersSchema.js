const Joi = require('joi');

const schema = {
    query: Joi.object({
        page: Joi.number().min(1),
        limit: Joi.number().min(1).max(100),
        name: Joi.string().min(1).max(50),
        email: Joi.string(),
    }).or('name','email')
}

module.exports = schema;