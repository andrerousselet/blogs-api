const { login } = require('./loginController');
const { createUser, getAllUsers, getUserById } = require('./userController');
const { createCat } = require('./categoryController');

module.exports = { 
  login, 
  createUser, 
  getAllUsers, 
  getUserById, 
  createCat, 
};
