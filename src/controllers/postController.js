const service = require('../services');

const getAllPosts = async (_req, res) => {
  const posts = await service.getAllPosts();
  return res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const { post, code, message } = await service.getPostById(id);
  if (message) return res.status(code).json({ message });
  return res.status(code).json(post);
};

const updatePost = async (req, res) => {
  const { id: postId } = req.params;
  const { title, content } = req.body;
  const { id: userId } = res.locals.user;
  const { post, code, message } = await service.updatePost({ postId, title, content, userId });
  if (message) return res.status(code).json({ message });
  return res.status(code).json(post);
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

module.exports = { getAllPosts, getPostById, updatePost, createPost };
