import express from 'express';
import { createNota, deleteNota, getAllNotas, updateNota } from '../controllers/controller.js';

const  router = express.Router();   

// Rota GET

router.get('/', getAllNotas);

// Rota POST
router.post('/', createNota);

// Rota PUT
router.put('/:id', updateNota);

// Rota DELETE
router.delete('/:id', deleteNota);

export default router;