import express from 'express';
import { createNota, deleteNota, getAllNotas, updateNota, getNotasById } from '../controllers/controller.js';

const  router = express.Router();   

// Rota GET

router.get('/', getAllNotas);
router.get('/:id', getNotasById);

// Rota POST
router.post('/', createNota);

// Rota PUT
router.put('/:id', updateNota);

// Rota DELETE
router.delete('/:id', deleteNota);

export default router;