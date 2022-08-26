const service = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const { token, code, message } = await service.login({ email, password });
  if (message) return res.status(code).json({ message });
  return res.status(code).json({ token });
};

module.exports = { login };
