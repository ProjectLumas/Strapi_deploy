// config/database.ts

export default ({ env }) => {
  // Configuração explícita para o ambiente de produção
  if (env('NODE_ENV') === 'production') {
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
  }

  // Configuração padrão para todos os outros ambientes (desenvolvimento)
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };
};