const { login } = require('./loginController');
const { createUser, getAllUsers, getUserById } = require('./userController');
const { createCategory } = require('./categoryController');

module.exports = { 
  login, 
  createUser, 
  getAllUsers, 
  getUserById, 
  createCategory, 
};
