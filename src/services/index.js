const { login } = require('./loginService');
const { create, getAll, getById } = require('./userService');

module.exports = { login, create, getAll, getById };
