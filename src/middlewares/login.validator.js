const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': '400|Some required fields are missing',
    'string.empty': '400|Some required fields are missing',
    'string.email': '422|"email" must be a valid email',
  }),
  password: Joi.string().alphanum().required().messages({
    'any.required': '400|Some required fields are missing',
    'string.empty': '400|Some required fields are missing',
  }),
});

const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }
  next();
};

module.exports = { validateLogin };
