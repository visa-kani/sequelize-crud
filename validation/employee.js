const Joi = require('joi');
const schema = {
    CreateEmployee: Joi.object().keys({
        first_name: Joi.string().alphanum().min(3).max(255).required(),
        last_name: Joi.string().alphanum().min(3).max(255).required(),
        email: Joi.string().required(),
        hire_date: Joi.date().required(),
        department_id: Joi.number().integer().min(1).max(10).required(),
    }),
    userRegistration: Joi.object().keys({
        user_name: Joi.string().required(),
        email: Joi.string().required(),
        address: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        phone_number: Joi.string().required(),
        user_password: Joi.string().required().max(8)
    }),
    userLogin: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required()
    })
}

module.exports = { schema }