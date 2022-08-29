const { login } = require('./loginController');
const { createUser, getAllUsers, getUserById } = require('./userController');
const { createCategory, getAllCategories } = require('./categoryController');

module.exports = { 
  login, 
  createUser, 
  getAllUsers, 
  getUserById, 
  createCategory,
  getAllCategories,
};
