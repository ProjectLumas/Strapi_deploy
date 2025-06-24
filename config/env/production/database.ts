// config/env/production/database.ts

import { parse } from 'pg-connection-string';

// O Strapi injeta uma função 'env' para acessar as variáveis de ambiente de forma segura.
export default ({ env }: { env: (key: string, defaultValue?: any) => any }) => {
  const databaseUrl = env('DATABASE_URL');

  // Lança um erro se a URL do banco de dados não for encontrada,
  // o que impede que o deploy continue com uma configuração incorreta.
  if (!databaseUrl) {
    throw new Error("A variável de ambiente DATABASE_URL não foi definida.");
  }

  const config = parse(databaseUrl);

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: config.host,
        port: parseInt(config.port || '5432', 10), // Garante que a porta seja um número
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          // Esta configuração é necessária para a maioria dos provedores de banco de
          // dados na nuvem, como Neon, Render, etc.
          rejectUnauthorized: false,
        },
      },
      debug: false,
    },
  };
};