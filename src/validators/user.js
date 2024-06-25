const Joi = require('joi');

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  age: Joi.number().integer().required(),
  city: Joi.string().required(),
  zipCode: Joi.string().required(),
});

const validateUser = (data) => {
  return userSchema.validate(data);
};

module.exports = { validateUser };
