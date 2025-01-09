const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/calculo', (req, res) => {
  const { valor1, valor2 } = req.body;
  if (typeof valor1 !== 'number' || typeof valor2 !== 'number') {
    return res.status(400).json({ error: 'Os valores devem ser numéricos.' });
  }
  res.json({ resultado: valor1 + valor2 });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
