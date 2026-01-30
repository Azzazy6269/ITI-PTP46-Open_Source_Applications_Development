const APIError = require('../utils/APIError');

module.exports = (schema) => {
    if (!schema || Object.keys(schema).length === 0) {
        console.error("❌ ERROR: Validation middleware received an empty or undefined schema!");
    } else {
        console.log("✅ Validation initialized for keys:", Object.keys(schema));
    }
    return (req, res, next) => {
        console.log("🚀 Request reached the validation function!");
        for (const key in schema) {
            console.log("Checking key:", key); 
            const { error } = schema[key].validate(req[key], { abortEarly: true });
            if (error) {
                console.log("❌ Validation failed:", error.message);
                throw new APIError(error.details[0].message, 400);
            }
        }
        console.log("✅ Validation passed, calling next()...");
        next();
    }
}