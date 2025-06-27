// config/env/production/database.js

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      // CORREÇÃO: Usando os nomes exatos das variáveis de ambiente fornecidas pelo Neon.
      host: env('PGHOST'),
      port: env.int('PGPORT', 5432), // Usa a porta padrão 5432 se PGPORT não estiver definida
      database: env('PGDATABASE'),
      user: env('PGUSER'),
      password: env('PGPASSWORD'),
      ssl: {
        // Esta configuração continua sendo crucial para conexões na nuvem.
        rejectUnauthorized: false, 
      },
    },
    debug: false,
  },
});