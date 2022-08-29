const service = require('../services');

const getAllCategories = async (_req, res) => {
  const categories = await service.getAllCategories();
  return res.status(200).json(categories);
};

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { newCategory, code, message } = await service.createCategory(name);
  if (message) return res.status(code).json({ message });
  return res.status(code).json(newCategory);
};

module.exports = { createCategory, getAllCategories };
