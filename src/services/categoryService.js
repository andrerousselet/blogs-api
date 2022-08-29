const { Category } = require('../database/models');

const createCat = async (name) => {
  const category = await Category.findOne({ where: { name } });
  if (category) return { code: 409, message: 'Category already exists' };
  const { dataValues: newCategory } = await Category.create({ name });
  return { code: 201, newCategory };
};

module.exports = { createCat };
