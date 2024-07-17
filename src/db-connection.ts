import { Sequelize } from "sequelize";
import 'dotenv/config'
import pg from 'pg'

export const db = new Sequelize( process.env.DATABASE_URL, {
     dialect: 'postgres',
     dialectModule: pg,
     dialectOptions: {
          ssl: {
               require: true,
               rejectUnauthorized: false
             }
     },
     define: {
          charset: 'utf8mb4',
          collate: 'utf8mb4_general_ci',
        },
     logging: false
});

