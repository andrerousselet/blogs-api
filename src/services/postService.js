const { BlogPost, PostCategory, User, sequelize } = require('../database/models');

const getUserId = async (userEmail) => {
  const { id: userId } = await User.findOne({ where: { email: userEmail } });
  return userId;
};

const createPost = async ({ title, content, categoryIds, userEmail }) => {
  const post = await sequelize.transaction(async (transaction) => {
    const userId = await getUserId(userEmail);
    const createdPost = await BlogPost.create({ title, content, userId }, { transaction });
    const postCategories = categoryIds.map((catId) => (
      { postId: createdPost.id, categoryId: catId }
    ));
    await PostCategory.bulkCreate(postCategories, { transaction });
    return createdPost;
  });
  return { code: 201, post };
};

module.exports = { createPost };
