const { BlogPost, PostCategory, User, Category, sequelize } = require('../database/models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    attributes: { exclude: ['UserId'] }, // verificar pq essa chave está sendo criada...
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    attributes: { exclude: ['UserId'] }, // verificar pq essa chave está sendo criada...
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) return { code: 404, message: 'Post does not exist' };
  return { code: 200, post };
};

const createPost = async ({ title, content, categoryIds, userId }) => {
  const post = await sequelize.transaction(async (transaction) => {
    const createdPost = await BlogPost.create({ title, content, userId }, { transaction });
    const postCategories = categoryIds.map((catId) => (
      { postId: createdPost.id, categoryId: catId }
    ));
    await PostCategory.bulkCreate(postCategories, { transaction });
    return createdPost;
  });
  return { code: 201, post };
};

module.exports = { createPost, getAllPosts, getPostById };
