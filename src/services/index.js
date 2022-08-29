const { login } = require('./loginService');
const { createUser, getAllUsers, getUserById } = require('./userService');
const { createCat } = require('./categoryService');

module.exports = { login, createUser, getAllUsers, getUserById, createCat };
