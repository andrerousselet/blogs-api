const { generateToken, validateToken } = require('./auth.middleware');
const { 
  validateLogin,
  validateUser,
  validateCategory,
  validatePost,
  validatePostUpdate, 
} = require('./joi.validators');
const error = require('./error.middleware');

module.exports = { 
  error,
  generateToken,
  validateLogin,
  validateUser,
  validateToken,
  validateCategory,
  validatePost,
  validatePostUpdate,
};
