const getAllNotas = (req, res) => {
  res.status(200).send("Oi, mundo do backend!");
};

const getNotasById = (req, res) => {};

const criarNota = (req, res) => {
  res.status(201).json({ message: "Nota criada com sucesso!" });
};

const atualizarNota = (req, res) => {
  res.status(200).json({ message: "Nota atualizada com sucesso!" });
};

const deletarNota = (req, res) => {
  res.status(204).json({ message: "Nota deletada com sucesso!" });
};

module.exports = {
  getAllNotas,
  getNotasById,
  criarNota,
  atualizarNota,
  deletarNota,
};
