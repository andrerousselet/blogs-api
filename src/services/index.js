const { login } = require('./loginService');
const { createUser, getAllUsers, getUserById, deleteUser } = require('./userService');
const { createCategory, getAllCategories } = require('./categoryService');
const { 
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPost,
} = require('./postService');

module.exports = { 
  login, 
  createUser, 
  getAllUsers,
  getUserById,
  deleteUser,
  createCategory,
  getAllCategories,
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  searchPost,
};
