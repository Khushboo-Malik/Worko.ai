const User = require('../models/user');

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const findUserById= async (id) => {
  return await User.findById(id);
};

const findAllUsers = async () => {
  return await User.find({ isDeleted: false });
};

const updateUserById_put = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

const updateUserById_patch = async (id, updateData) => {
    return await User.findByIdAndUpdate(id, updateData, { new: true });
};

const softDeleteUserById = async (id) => {
  return await User.findByIdAndUpdate(id, {
    isDeleted: true,
    deletedAt: new Date(),
  }, { new: true });
};

module.exports = {
  createUser,
  findUserById,
  findAllUsers,
  updateUserById_put,
  updateUserById_patch,
  softDeleteUserById,
};
