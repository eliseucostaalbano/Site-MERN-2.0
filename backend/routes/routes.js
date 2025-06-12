const express = require('express');
const { getAllNotas, criarNota, atualizarNota, getNotasById, deletarNota } = require('../controller/controller.js');

const router = express.Router();

// Rota GET all
router.get('/', getAllNotas);
// Rota GET by ID
router.get('/:id', getNotasById);
// Rota POST
router.post('/',  criarNota);
// Rota PUT 
router.put('/:id', atualizarNota); 
// Rota DELETE 
router.delete('/:id', deletarNota);

// Exporta o router
module.exports = router;