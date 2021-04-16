import express from 'express';
import {getUsers, createUser, editUser, deleteUser} from '../controllers/users.js'

const router = express.Router();

router.get('/', getUsers);
router.post('/create', createUser);
router.patch('/edit/:code', editUser);
router.delete('/delete/:code', deleteUser);


export default router;