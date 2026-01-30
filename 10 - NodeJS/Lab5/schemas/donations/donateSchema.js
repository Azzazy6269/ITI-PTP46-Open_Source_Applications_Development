const Joi = require('joi');

const createDonationBody = Joi.object({
    amount: Joi.number().min(5).required()
}).required();

const createDonationSchema = {
    body: createDonationBody,
}

module.exports = createDonationSchema;