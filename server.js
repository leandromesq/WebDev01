const express = require('express');
const sequelize = require('./config/database');
const Endereco = require('./models/endereco');
const rotas = require('./routes');

const app = express();
const port = 3000;

app.get('/enderecos', async (req, res) => {
    try {
        const enderecos = await Endereco.findAll();
        res.status(200).json(enderecos);
      } catch (error) {
        res
          .status(500)
          .json({ error: "Erro ao ler endereços", details: error.message });
      }
  });

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

app.use(express.json());
// app.use('/api', rotas);

// const PORT = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));