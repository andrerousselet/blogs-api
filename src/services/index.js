const { login } = require('./loginService');
const { createUser, getAllUsers, getUserById } = require('./userService');
const { createCategory, getAllCategories } = require('./categoryService');
const { createPost } = require('./postService');

module.exports = { 
  login, 
  createUser, 
  getAllUsers,
  getUserById,
  createCategory,
  getAllCategories,
  createPost,
};
