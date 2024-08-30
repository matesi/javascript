const { Pool } = require("pg");

// Configurações do banco de dados
const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "empresa_db",
  password: "postgres",
  port: 5432, // Porta padrão do PostgreSQL
});

module.exports = pool; //Exportando para usarmos posteriomente
