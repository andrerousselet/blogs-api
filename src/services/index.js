const { login } = require('./loginService');
const { createUser, getAllUsers, getUserById } = require('./userService');

module.exports = { login, createUser, getAllUsers, getUserById };
