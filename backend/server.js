const express = require('express');

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).send('Olá, mundo do backend!');
});

app.post('/', (req, res) => {
  res.status(201).json({ message: 'Dados recebidos com sucesso!' });
});

app.put('/', (req, res) => {
  res.status(200).json({ message: 'Dados atualizados com sucesso!' });
});

app.delete('/', (req, res) => {
  res.status(204).send();
});


app.listen(3000, () => {
  console.log('Servidor rodando em  http://localhost:3000');
});

