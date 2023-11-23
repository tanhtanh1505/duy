const { createUserSchema, updateUserSchema } = require("../../schemas/user");
const HttpException = require("../../utils/HttpException");

module.exports.validateCreateUser = (req, res, next) => {
  const { error } = createUserSchema.validate(req.body);
  if (error) {
    throw new HttpException(500, error.message);
  }
  next();
};

module.exports.validateUpdateUser = (req, res, next) => {
  const { error } = updateUserSchema.validate(req.body);
  if (error) {
    throw new HttpException(500, error.message);
  }
  next();
};
