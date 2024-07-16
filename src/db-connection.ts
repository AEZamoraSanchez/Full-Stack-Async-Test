import { Sequelize } from "sequelize";
import 'dotenv/config'
import pg from 'pg'


export const db = new Sequelize({
     username: process.env.DATABASE_USER,
     password: process.env.DATABASE_PASSWORD,
     database: process.env.DATABASE_NAME,
     host: process.env.DATABASE_HOST,
     port: +process.env.DATABASE_PORT,
     dialect: 'postgres',
     dialectModule: pg,
     define: {
          charset: 'utf8mb4',
          collate: 'utf8mb4_general_ci',
        },
     logging: false
});

