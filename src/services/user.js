const {
    createUser,
    findUserById,
    findAllUsers,
    updateUserById_put,
    updateUserById_patch,
    softDeleteUserById,
  } = require('../dao/user');
  const UserDTO = require('../dtos/user');
  
  const createUserService = async (userData) => {
    const newUser = await createUser(userData);
    return new UserDTO(newUser);
  };
  
  const getUserByIdService = async (id) => {
    const user = await findUserById(id);
    if (user && !user.isDeleted) {
      return new UserDTO(user);
    }
    throw new Error('User not found or deleted');
  };
  
  const getAllUsersService = async () => {
    const users = await findAllUsers();
    return users.map(user => new UserDTO(user));
  };
  
  const updateUserService_put = async (id, updateData) => {
    const updatedUser = await updateUserById_put(id, updateData);
    if (updatedUser && !updatedUser.isDeleted) {
      return new UserDTO(updatedUser);
    }
    throw new Error('User not found or deleted');
  };
  
  const updateUserService_patch = async (id, updateData) => {
    const updatedUser = await updateUserById_patch(id, updateData);
    if (updatedUser && !updatedUser.isDeleted) {
      return new UserDTO(updatedUser);
    }
    throw new Error('User not found or deleted');
  };

  const softDeleteUserService = async (id) => {
    const deletedUser = await softDeleteUserById(id);
    if (deletedUser) {
      return new UserDTO(deletedUser);
    }
    throw new Error('User not found');
  };
  
  module.exports = {
    createUserService,
    getUserByIdService,
    getAllUsersService,
    updateUserService_put,
    updateUserService_patch,
    softDeleteUserService,
  };
  