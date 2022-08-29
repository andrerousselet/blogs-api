const { login } = require('./loginController');
const { createUser, getAllUsers, getUserById } = require('./userController');

module.exports = { login, createUser, getAllUsers, getUserById };
