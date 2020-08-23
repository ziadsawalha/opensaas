import { DB_PORT, DB_DB, DB_HOST, DB_PASSWORD, DB_USER } from './src/lib/config';

module.exports = [
  {
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DB,
    synchronize: true,
    logging: false,
    keepConnectionAlive: true,
    entities: ['src/db/entity/**/*.ts'],
    migrations: ['src/db/migration/**/*.ts'],
    subscribers: ['src/db/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'src/db/entity',
      migrationsDir: 'src/db/migration',
      subscribersDir: 'src/db/subscriber',
    },
  },
  {
    name: 'seed',
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_DB,
    synchronize: true,
    logging: false,
    keepConnectionAlive: true,
    entities: ['src/db/entity/**/*.ts'],
    migrations: ['src/db/seed/**/*.ts'],
    subscribers: ['src/db/subscriber/**/*.ts'],
    cli: {
      entitiesDir: 'src/db/entity',
      migrationsDir: 'src/db/seed',
      subscribersDir: 'src/db/subscriber',
    },
  },
];
