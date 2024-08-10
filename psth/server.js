const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;



app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/consulta-cep/:cep', async (req, res) => {
    const cep = req.params.cep; //obtendo cep da url
    const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;

    try {
        if (!cepRegex.test(cep)) {
            console.log("entrou")
            res.status(400).send('CEP inválido. Formato: XXXXX-XXX');
           return
        }
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        res.json(response.data);
   
        
    } catch (error) {
        console.error('Erro ao fazer requisição:', error);
        res.status(500).send('Erro ao consultar o CEP');
    }
});

app.get('/rota', (req, res) => {
    res.send('minha primeira rota');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}` );
});