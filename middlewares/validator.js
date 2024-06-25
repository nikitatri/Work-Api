const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    age: Joi.number().integer().min(0).required(),
    city: Joi.string().required(),
    zipCode: Joi.string().pattern(new RegExp('^[0-9]{5}$')).required(),
    isDeleted: Joi.boolean()
});

const idSchema = Joi.string().hex().length(24);

const validateUser = (data, partial = false) => {
    if (partial) {
        return userSchema.min(1).validate(data); // Allow partial updates
    }
    return userSchema.validate(data);
};

const validateId = (id) => {
    return idSchema.validate(id);
};

module.exports = {
    validateUser,
    validateId
};
