const {
    createUserService,
    getUserByIdService,
    getAllUsersService,
    updateUserService_put,
    updateUserService_patch,
    softDeleteUserService,
  } = require('../services/user');
  const { validateCreateUser,validateUpdateUser } = require('../validators/user');
  
  const createUserController = async (req, res) => {
    try {
      const { error } = validateCreateUser(req.body);
      if (error) return res.status(400).json({ message: error.details[0].message });
      
      const userDTO = await createUserService(req.body);
      res.status(201).json(userDTO);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  const getUserByIdController = async (req, res) => {
    try {
      const userDTO = await getUserByIdService(req.params.userId);
      res.status(200).json(userDTO);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
  const getAllUsersController = async (req, res) => {
    try {
      const users = await getAllUsersService();
      res.status(200).json(users);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  const updateUserController_put = async (req, res) => {
    try {
      const { error } = validateUpdateUser(req.body);
      if (error) return res.status(400).json({ message: error.details[0].message });
      
      const userDTO = await updateUserService_put(req.params.userId, req.body);
      res.status(200).json(userDTO);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
  const updateUserController_patch = async (req, res) => {
    try {
      const { error } = validateUpdateUser(req.body);
      if (error) return res.status(400).json({ message: error.details[0].message });
      
      const userDTO = await updateUserService_patch(req.params.userId, req.body);
      res.status(200).json(userDTO);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  const softDeleteUserController = async (req, res) => {
    try {
      const userDTO = await softDeleteUserService(req.params.userId);
      res.status(200).json({ message: 'User soft deleted', user: userDTO });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  
  module.exports = {
    createUserController,
    getUserByIdController,
    getAllUsersController,
    updateUserController_put,
    updateUserController_patch,
    softDeleteUserController,
  };
  