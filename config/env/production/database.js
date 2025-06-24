
// Este pacote ajuda a interpretar a URL de conexão do banco de dados.
const { parse } = require('pg-connection-string');

module.exports = ({ env }) => {
  // Lê a variável de ambiente DATABASE_URL
  const databaseUrl = env('DATABASE_URL');

  // Se a variável não for encontrada, o deploy irá falhar (o que é bom)
  if (!databaseUrl) {
    throw new Error("A variável de ambiente DATABASE_URL não foi definida.");
  }

  const config = parse(databaseUrl);

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          // Esta configuração é crucial para a maioria dos bancos de dados na nuvem.
          rejectUnauthorized: false,
        },
      },
      debug: false,
    },
  };
};