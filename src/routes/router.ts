import express from 'express';
import UserController from '../controller/userController';

const router = express.Router();

router.post('/', UserController.createUser);
router.get('/', UserController.getAllUsers);
router.get('/:cpf', UserController.getUserByCpf);
router.put('/:cpf', UserController.updateUserByCpf);
router.delete('/:cpf', UserController.deleteUserByCpf);

export default router;
