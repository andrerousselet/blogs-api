const { generateToken } = require('./token.middleware');
const { validateLogin } = require('./login.validator');
const error = require('./error.middleware');

module.exports = { error, generateToken, validateLogin };
