const {DataTypes } = require("sequelize");
const sequelize = require('../config/database');


const Endereco = sequelize.define( 'Endereco',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    logradouro: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    complemento: {
      type: DataTypes.STRING,
    },

    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    municipioibge: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Endereco",
    tableName: "enderecos",
    timestamps: false,
  }
);
module.exports = Endereco;
