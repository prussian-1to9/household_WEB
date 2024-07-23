// src/config/dotenv.ts
import { resolve } from 'path';
import { config } from 'dotenv';

let dotenvPath = '';
switch (process.env.NODE_ENV) {
    case 'prod':
        break;
    case 'dev':
        dotenvPath = resolve(__dirname, '../../.env.dev');
    break;
    default:
        dotenvPath = resolve(__dirname, '../../.env.dev');
}
config({ path : dotenvPath });
