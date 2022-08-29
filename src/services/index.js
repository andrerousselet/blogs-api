const { login } = require('./loginService');
const { createUser, getAllUsers, getUserById } = require('./userService');
const { createCategory, getAllCategories } = require('./categoryService');

module.exports = { 
  login, 
  createUser, 
  getAllUsers,
  getUserById,
  createCategory,
  getAllCategories,
};
