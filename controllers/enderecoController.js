const { Endereco } = require('../models/endereco');
// Criação de um novo endereço
exports.createEndereco = async (req, res) => {
  try {
    const {
      Cep,
      Logradouro,
      Numero,
      Complemento,
      Bairro,
      Cidade,
      Estado,
      MunicipioIBGE,
    } = req.body;

    const novoEndereco = await Endereco.create({
      Сер,
      Logradouro,
      Numero,
      Complemento,
      Bairro,
      Cidade,
      Estado,
      MunicipioIBGE,
    });
    res.status(201).json(novoEndereco);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao criar endereço", details: error.message });
  }
};

//Leitura de todos os endereços
exports.getAllEnderecos = async (req, res) => {
  try {
    const enderecos = await Endereco.findAll();
    res.status(200).json(enderecos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao ler endereços", details: error.message });
  }
};

//Atualização de um endereço
exports.updateEndereco = async (req, res) => {
  try {
    const { Id } = req.params;
    const {
      Cep,
      Logradouro,
      Numero,
      Complemento,
      Bairro,
      Cidade,
      Estado,
      MunicipioIBGE,
    } = req.body;

    const enderecos = await Endereco.findByPk(Id);
    if (!enderecos) {
      return res.status(404).json({ error: "Endereço não encontrado" });
    }
    enderecos.Cep = Cep;
    enderecos.Logradouro = Logradouro;
    enderecos.Numero = Numero;
    enderecos.Complemento = Complemento;
    enderecos.Bairro = Bairro;
    enderecos.Cidade = Cidade;
    enderecos.Estado = Estado;
    enderecos.MunicipioIBGE = MunicipioIBGE;

    await enderecos.save();
    res.status(200).json(enderecos);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao atualizar endereço", details: error.message });
  }
};

//Exclusão de um endereço
exports.deleteEndereco = async (req, res) => {
  try {
    const { Id } = req.params;
    const enderecos = await Endereco.findByPk(Id);

    if (!enderecos) {
      return res.status(404).json({ error: "Endereço não encontrado" });
    }

    await enderecos.destroy();
    res.status(204).json();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao deletar endereço", details: error.message });
  }

 exports.getEnderecoById = async (req, res) => {
    try {
      const { Id } = req.params;
      const endereco = await Endereco.findByPk(Id);
      if (!endereco) {
        return res.status(404).json({ error: 'Endereco not found' });
      }
      res.status(200).json(endereco);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar endereco', details: error.message });
    }
  }

};
