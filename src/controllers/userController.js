const service = require('../services');

const getAllUsers = async (_req, res) => {
  const users = await service.getAllUsers();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { user, code, message } = await service.getUserById(id);
  if (message) return res.status(code).json({ message });
  return res.status(code).json(user);
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { token, code, message } = await service
    .createUser({ displayName, email, password, image });
  if (message) return res.status(code).json({ message });
  return res.status(code).json({ token });
};

const deleteUser = async (_req, res) => {
  const { id } = res.locals.user;
  const { code } = await service.deleteUser(id);
  return res.status(code).end();
};

module.exports = { getAllUsers, getUserById, createUser, deleteUser };
