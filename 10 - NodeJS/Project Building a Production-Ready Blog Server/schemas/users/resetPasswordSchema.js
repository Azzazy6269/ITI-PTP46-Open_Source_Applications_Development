const Joi = require('joi');

const resetPasswordBody = Joi.object({
    newPassword: Joi.string().min(8).max(30).required(),
    repeatPassword: Joi.string().valid(Joi.ref('newPassword')).required()
}).required();

const resetPasswordSchema = {
    body: resetPasswordBody,
}

module.exports = resetPasswordSchema;