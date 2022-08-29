const { login } = require('./loginService');
const { create, getAll } = require('./userService');

module.exports = { login, create, getAll };
