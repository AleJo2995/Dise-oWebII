import express from 'express';
import {getBusetas, createBuseta, editBuseta, deleteBuseta} from '../controllers/busetas.js'

const router = express.Router();

router.get('/', getBusetas);
router.post('/create', createBuseta);
router.patch('/edit/:code', editBuseta);
router.delete('/delete/:code', deleteBuseta);

export default router;