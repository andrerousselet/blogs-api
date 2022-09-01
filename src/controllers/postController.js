const service = require('../services');

const getAllPosts = async (_req, res) => {
  const posts = await service.getAllPosts();
  return res.status(200).json(posts);
};

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id: userId } = res.locals.user;
  const { post, code, message } = await service.createPost(
    { title, content, categoryIds, userId },
  );
  if (message) return res.status(code).json({ message });
  return res.status(code).json(post);
};

module.exports = { getAllPosts, createPost };
