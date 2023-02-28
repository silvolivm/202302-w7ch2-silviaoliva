import dotenv from 'dotenv';
dotenv.config();

export const config = {
  user: process.env.DB_USER,
  passwd: process.env.DB_PASSWORD,
  cluster: process.env.DB_CLUSTER,
  dbName: process.env.DB_NAME,
};
