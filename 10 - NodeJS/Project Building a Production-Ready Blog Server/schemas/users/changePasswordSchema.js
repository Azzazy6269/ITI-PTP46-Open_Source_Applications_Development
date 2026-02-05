const Joi = require('joi');

const changePasswordBody = Joi.object({
    currentPassword: Joi.string().required(),
    newPassword: Joi.string().min(8).max(30).required(),
    repeatPassword: Joi.string().valid(Joi.ref('newPassword')).required()
}).required();

const changePasswordSchema = {
    body: changePasswordBody,
}

module.exports = changePasswordSchema;