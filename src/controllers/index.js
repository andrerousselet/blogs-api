const { login } = require('./loginController');
const { createUser, getAllUsers, getUserById } = require('./userController');
const { createCategory, getAllCategories } = require('./categoryController');
const { createPost, getAllPosts, getPostById } = require('./postController');

module.exports = { 
  login, 
  createUser, 
  getAllUsers, 
  getUserById, 
  createCategory,
  getAllCategories,
  createPost,
  getAllPosts,
  getPostById,
};
