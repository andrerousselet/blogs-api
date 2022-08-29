const middleware = require('../middlewares/auth.middleware');
const { User } = require('../database/models');

const create = async ({ displayName, email, password, image }) => {
  const token = middleware.generateToken({ displayName, email, image });
  const user = await User.findOne({ where: { email } });
  if (user) return { code: 409, message: 'User already registered' };
  await User.create({ displayName, email, password, image });
  return { code: 201, token };
};

module.exports = { create };
