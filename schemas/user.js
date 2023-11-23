const Joi = require("joi");

module.exports.createUserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  full_name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone_number: Joi.string().required(),
  image_avatar: Joi.string().allow(""),
  date_of_birth: Joi.string().allow(""),
  sex: Joi.string().allow(""),
});

module.exports.updateUserSchema = Joi.object({
  full_name: Joi.string(),
  avatar: Joi.string().allow(""),
  date_of_birth: Joi.string().allow(""),
});
