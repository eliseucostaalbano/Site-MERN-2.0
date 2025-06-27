import Nota from "../model/nota.js";

export async function getAllNotas(req, res) {
  try {
    const notas = await Nota.find();
    res.status(200).json(notas);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar notas" });
  }
}

export async function getNotasById(req, res) {
  try {
    const { id } = req.params;
    const nota = await Nota.findById(id);
    if (!nota) {
      return res.status(404).json({ message: "Nota não encontrada" });
    }
    res.status(200).json(nota);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar nota" });
  }
}


export async function createNota(req, res) {
  try {
    const { titulo, conteudo } = req.body;
    const newNota = new Nota({ titulo, conteudo });
    const notaSalva = await newNota.save();
    res.status(201).json(notaSalva);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar nota" });
  }
}

export async function updateNota(req, res) {
  try {
    const { id } = req.params;
    const { titulo, conteudo } = req.body;
    const notaAtualizada = await Nota.findByIdAndUpdate(
      id,
      { titulo, conteudo },
      { new: true }
    );
    if (!notaAtualizada) {
      return res.status(404).json({ message: "Nota não encontrada" });
    }
    res.status(200).json(notaAtualizada);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar nota" });
  }
}

export async function deleteNota(req, res) {
  try {
    const { id } = req.params;
    const notaDeletada = await Nota.findByIdAndDelete(id);
    if (!notaDeletada) {
      return res.status(404).json({ message: "Nota não encontrada" });
    }
    res.status(200).json({ message: "Dados deletados com sucesso!" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar nota" });
  }
}
