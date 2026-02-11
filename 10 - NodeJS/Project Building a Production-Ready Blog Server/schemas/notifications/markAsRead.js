const Joi = require('joi');

const markAsReadParams = Joi.object({
    notificationId : Joi.string().hex().length(24).required()
}).required();

const markAsReadSchema = {
    params: markAsReadParams
}

module.exports = markAsReadSchema;