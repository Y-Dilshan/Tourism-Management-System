import userController from '../controllers/userController.js';
import express from 'express';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/', userController.getAllUsers);