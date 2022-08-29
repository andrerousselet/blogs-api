const service = require('../services');

const getAll = async (_req, res) => {
  const users = await service.getAll();
  return res.status(200).json(users);
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { token, code, message } = await service.create({ displayName, email, password, image });
  if (message) return res.status(code).json({ message });
  return res.status(code).json({ token });
};

module.exports = { getAll, create };
