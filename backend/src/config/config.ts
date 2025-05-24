import dotenv from 'dotenv';

dotenv.config();

interface Config {
  PORT: number;
  nodeEnv: string;
  API_KEY: string;
  URL_HOST: string;
  EMAIL: string;
}

const config: Config = {
  PORT: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  API_KEY: process.env.API_KEY || '',
  URL_HOST: process.env.URL_HOST || '',
  EMAIL: process.env.EMAIL || ''
};

export default config;