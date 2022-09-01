const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '1h',
};

const generateToken = (user) => {
  const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);
  return token;
};

const validateToken = async (req, res, next) => {
  const { authorization: token } = req.headers;
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const { data } = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ where: { email: data.email } });
    res.locals.user = user;
    next();
  } catch (error) {
    error.code = 401;
    error.message = 'Expired or invalid token';
    next(error);
  }
};

module.exports = { generateToken, validateToken };
