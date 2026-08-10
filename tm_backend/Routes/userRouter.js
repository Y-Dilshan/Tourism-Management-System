import express from 'express';
import {
  createUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;