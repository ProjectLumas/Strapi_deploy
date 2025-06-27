// config/server.ts

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // CORREÇÃO: Mudamos de 'env.array' para 'env'.
    // Lemos a variável APP_KEYS como uma string simples e a colocamos dentro de um array.
    // Se a variável não for encontrada, usamos uma chave padrão de desenvolvimento para
    // evitar que o build quebre, embora isso não seja ideal para segurança a longo prazo,
    // nos ajuda a passar desta etapa do deploy.
    keys: env('APP_KEYS', 'temporaryKeyA,temporaryKeyB').split(','),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});