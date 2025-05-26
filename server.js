const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const DATA_FILE = path.join(__dirname, 'data', 'sentimentos.json');

// Cria arquivo se não existir
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// Rota para salvar
app.post('/salvar', (req, res) => {
  const novo = req.body;

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Erro ao ler dados.');

    let sentimentos = [];
    try {
      sentimentos = JSON.parse(data);
    } catch (e) {}

    const atualizados = sentimentos.filter(e => e.data !== novo.data);
    atualizados.push(novo);

    fs.writeFile(DATA_FILE, JSON.stringify(atualizados, null, 2), err => {
      if (err) return res.status(500).send('Erro ao salvar.');
      res.status(200).send('Salvo com sucesso!');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
