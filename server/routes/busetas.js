import express from 'express';
import {getBusetas, createBuseta, editBuseta, deleteBuseta, 
        getAvailableSpacesByBusetaCode, saveASeat} from '../controllers/busetas.js'

const router = express.Router();

router.get('/', getBusetas);
router.post('/create', createBuseta);
router.patch('/edit/:code', editBuseta);
router.delete('/delete/:code', deleteBuseta);
router.get('/availableSpaces/:code', getAvailableSpacesByBusetaCode);
router.patch('/saveASeat/:code', saveASeat);

export default router;