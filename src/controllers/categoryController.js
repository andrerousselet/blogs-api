const service = require('../services');

const create = async (req, res) => {
  const { name } = req.body;
  const { category, code, message } = await service.create({ name });
  if (message) return res.status(code).json({ message });
  return res.status(code).json(category);
};

module.exports = { create };
