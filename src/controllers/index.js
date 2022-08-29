const { login } = require('./loginController');
const { create, getAll, getById } = require('./userController');

module.exports = { login, create, getAll, getById };
