const { Model, DataTypes, Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://usuario:senha@localhost:5432/api-node"
);

class Endereco extends Model {}

Endereco.init(
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Complemento: {
      type: DataTypes.STRING,
    },
    Bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    MunicipioIBGE: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Endereco",
    tableName: "enderecos",
    timestamps: true,
  }
);
module.exports = Endereco;
