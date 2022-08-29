const middleware = require('../middlewares/auth.middleware');
const { User } = require('../database/models');

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: 'password' } });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) return { code: 404, message: 'User does not exist' };
  return { code: 200, user };
};

const createUser = async ({ displayName, email, password, image }) => {
  const token = middleware.generateToken({ displayName, email, image });
  const user = await User.findOne({ where: { email } });
  if (user) return { code: 409, message: 'User already registered' };
  await User.create({ displayName, email, password, image });
  return { code: 201, token };
};

module.exports = { createUser, getAllUsers, getUserById };
