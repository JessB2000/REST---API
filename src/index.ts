import express from 'express';
import router from './routes/router';

const app = express();
app.use(express.json());

app.use('/users', router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});
