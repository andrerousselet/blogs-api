const { generateToken } = require('./token.middleware');
const { validateLogin } = require('./login.validator');
const { validateUser } = require('./addUser.validator');
const error = require('./error.middleware');

module.exports = { error, generateToken, validateLogin, validateUser };
