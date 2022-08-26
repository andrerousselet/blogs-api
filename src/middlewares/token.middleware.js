const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '1h',
};

const generateToken = (user) => {
  const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);
  return token;
};

// const validateToken = (req, res, next) => {
  
// };

module.exports = { generateToken };
