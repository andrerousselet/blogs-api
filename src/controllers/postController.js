const service = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userEmail = res.locals.user;
  const { post, code, message } = await service.createPost(
    { title, content, categoryIds, userEmail },
  );
  if (message) return res.status(code).json({ message });
  return res.status(code).json(post);
};

module.exports = { createPost };
