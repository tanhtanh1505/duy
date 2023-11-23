const Joi = require("joi");

module.exports.loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
