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

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(6).required(),
  image: Joi.string().required(),
});

const categorySchema = Joi.object({
  name: Joi.string().required(),
});

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().min(1).items(Joi.number().required()).required(),
});

const postUpdateSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

const validateLogin = (req, res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

const validateCategory = (req, res, next) => {
  const { error } = categorySchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

const validatePost = (req, res, next) => {
  const { error } = postSchema.validate(req.body);
  if (error) return res.status(400).json({ message: MESSAGE });
  next();
};

const validatePostUpdate = (req, res, next) => {
  const { error } = postUpdateSchema.validate(req.body);
  if (error) return res.status(400).json({ message: MESSAGE });
  next();
};

module.exports = {
  validateLogin, 
  validateUser, 
  validateCategory,
  validatePost, 
  validatePostUpdate, 
};
