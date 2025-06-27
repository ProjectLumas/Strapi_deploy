// config/server.ts

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // A linha mais importante: diz ao Strapi para ler as chaves da variável de ambiente APP_KEYS.
    // O 'env.array' é importante para o formato que a Render usa.
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    // Esta configuração é recomendada para produção
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});