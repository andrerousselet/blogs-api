const service = require('../services');

const createCat = async (req, res) => {
  const { name } = req.body;
  const { newCategory, code, message } = await service.createCat(name);
  if (message) return res.status(code).json({ message });
  return res.status(code).json(newCategory);
};

module.exports = { createCat };
