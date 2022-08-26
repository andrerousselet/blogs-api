const Joi = require('joi');

const MESSAGE = 'Some required fields are missing';

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': MESSAGE,
    'string.empty': MESSAGE,
    'string.email': '"email" must be a valid email',
  }),
  password: Joi.string().alphanum().required().messages({
    'any.required': MESSAGE,
    'string.empty': MESSAGE,
  }),
});

const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

module.exports = { validateLogin };
