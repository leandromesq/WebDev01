module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'usuario',
  password: 'senha',
  database: 'api-node',
  port: "5432",
  define: {
      timestamp: true,
      underscored: true
  }
}