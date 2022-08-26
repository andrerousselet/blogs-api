const service = require('../services');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { token, code, message } = await service.create({ displayName, email, password, image });
  if (message) return res.status(code).json({ message });
  return res.status(code).json({ token });
};

module.exports = { create };
