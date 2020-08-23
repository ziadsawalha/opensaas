import { config } from 'dotenv';
import { resolve } from 'path';

const env = process.env.NODE_ENV || 'development';
config({ path: resolve(__dirname, `../../.env.${env}`) });

export const APP_PORT = process.env.APP_PORT;
export const DB_USER = process.env.POSTGRES_USER;
export const DB_PASSWORD = process.env.POSTGRES_PASSWORD;
export const DB_DB = process.env.POSTGRES_DB;
export const DB_HOST = process.env.POSTGRES_HOST;
export const DB_PORT = process.env.POSTGRES_PORT;
export const LOG_LEVEL = process.env.LOG_LEVEL;
