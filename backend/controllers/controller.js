import Nota from '../model/nota.js';

export async function getAllNotas(req, res) {
 try {
    const notas = await Nota.find();
    res.status(200).json(notas);
 } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar notas' });
 }
}

export async function createNota(req, res) {
  res.status(201).json({ message: 'Dados recebidos com sucesso!' });
}

export async function updateNota(req, res) {
  res.status(200).json({ message: 'Dados atualizados com sucesso!' });
}

export async function deleteNota(req, res) {
  res.status(200).json({ message: 'Dados deletados com sucesso!' });
}