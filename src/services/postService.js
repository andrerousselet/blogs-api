const { Op } = require('sequelize');
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

const updatePost = async ({ postId, title, content, userId }) => {
  const post = await BlogPost.findByPk(postId);
  if (!post) return { code: 404, message: 'Post does not exist' };
  if (post.userId !== userId) return { code: 401, message: 'Unauthorized user' };
  const [updatedPost] = await BlogPost.update(
    { title, content },
    { where: { id: postId, userId } },
  );
  if (updatedPost === 1) return getPostById(postId);
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

const deletePost = async ({ postId, userId }) => {
  const post = await BlogPost.findByPk(postId);
  if (!post) return { code: 404, message: 'Post does not exist' };
  if (post.userId !== userId) return { code: 401, message: 'Unauthorized user' };
  const deletion = await BlogPost.destroy({ where: { id: postId, userId } });
  if (deletion === 1) return { code: 204 };
};

const searchPost = async (q) => {
  const searchResult = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.substring]: q } },
        { content: { [Op.substring]: q } },
      ],
    },
    attributes: { exclude: ['UserId'] }, // verificar pq essa chave está sendo criada...
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return searchResult;
};

module.exports = { getAllPosts, getPostById, updatePost, createPost, deletePost, searchPost };
