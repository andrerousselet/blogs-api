const service = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { newCategory, code, message } = await service.createCategory(name);
  if (message) return res.status(code).json({ message });
  return res.status(code).json(newCategory);
};

module.exports = { createCategory };
