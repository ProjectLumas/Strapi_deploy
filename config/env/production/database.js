// config/env/production/database.js

module.exports = ({ env }) => {
  // --- INÍCIO DO CÓDIGO DE DIAGNÓSTICO ---
  console.log('--- Iniciando diagnóstico de variáveis de ambiente ---');
  console.log(`Valor de PGHOST lido pelo Strapi: ${env('PGHOST')}`);
  console.log(`Valor de PGDATABASE lido pelo Strapi: ${env('PGDATABASE')}`);
  console.log(`Valor de PGUSER lido pelo Strapi: ${env('PGUSER')}`);
  // Não vamos imprimir a senha para manter a segurança, mas vamos verificar se ela existe.
  console.log(`A variável PGPASSWORD foi encontrada? ${!!env('PGPASSWORD')}`);
  console.log('--- Fim do diagnóstico ---');
  // --- FIM DO CÓDIGO DE DIAGNÓSTICO ---

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('PGHOST'),
        port: env.int('PGPORT', 5432),
        database: env('PGDATABASE'),
        user: env('PGUSER'),
        password: env('PGPASSWORD'),
        ssl: {
          rejectUnauthorized: false,
        },
      },
      debug: false,
    },
  };
};