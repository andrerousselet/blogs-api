const middleware = require('../middlewares/auth.middleware');
const { User } = require('../database/models');

const login = async ({ email, password }) => {
  const token = middleware.generateToken({ email });
  const user = await User.findOne({ where: { email, password } });
  if (!user) return { code: 400, message: 'Invalid fields' };
  return { code: 200, token };
};

module.exports = { login };
