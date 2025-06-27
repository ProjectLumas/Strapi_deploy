// config/server.ts

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // CORREÇÃO: Esta é a forma mais robusta de ler as chaves.
    // 1. Lemos a variável APP_KEYS como uma string simples.
    // 2. Se ela não existir, usamos chaves padrão de desenvolvimento para evitar que o build quebre.
    // 3. Usamos .split(',') para garantir que, mesmo que seja uma ou mais chaves, o resultado seja um array.
    keys: env('APP_KEYS', 'temporaryKeyA,temporaryKeyB').split(','),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});