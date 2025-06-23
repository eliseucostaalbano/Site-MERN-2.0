import express from 'express';
import dotenv from 'dotenv';

import rotasNotas from './routes/routes.js';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2621;
connectDB();
app.use(express.json());
app.use('/notas', rotasNotas);



app.listen(PORT, () => {
  console.log('Servidor rodando em http://localhost:' + PORT);
});

