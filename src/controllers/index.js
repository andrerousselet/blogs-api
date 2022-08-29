const { login } = require('./loginController');
const { create, getAll } = require('./userController');

module.exports = { login, create, getAll };
