const express = require('express');
const {
  createUserController,
  getUserByIdController,
  getAllUsersController,
  updateUserController_put,
  updateUserController_patch,
  softDeleteUserController,
} = require('../controllers/user');

const router = express.Router();

router.post('/worko/user_create', createUserController);
router.get('/worko/user', getAllUsersController);
router.get('/worko/user/:userId', getUserByIdController);
router.put('/worko/user/:userId', updateUserController_put);
router.patch('/worko/user/:userId', updateUserController_patch);
router.delete('/worko/user/:userId', softDeleteUserController);

module.exports = router;
