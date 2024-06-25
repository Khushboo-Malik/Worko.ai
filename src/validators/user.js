const Joi = require('joi');

const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  age: Joi.number().integer().required(),
  city: Joi.string().required(),
  zipCode: Joi.string().required(),
});


const updateUserSchema = Joi.object({
    email: Joi.string().email(),
    name: Joi.string(),
    age: Joi.number().integer(),
    city: Joi.string(),
    zipCode: Joi.string(),
  }).min(1);
  
const validateCreateUser = (data) => {
  return createUserSchema.validate(data);
};

const validateUpdateUser = (data) => {
    return updateUserSchema.validate(data);
  };
  
module.exports = { validateCreateUser,validateUpdateUser };
