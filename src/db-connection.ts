import { Sequelize } from "sequelize";
import 'dotenv/config'
if(process.env.DATABASE_NAME){
     
}
export const db = new Sequelize(process.env.DATABASE_NAME!, process.env.DATABASE_USER!, process.env.DATABASE_PASSWORD, {
     host: process.env.DATABASE_HOST,
     dialect: 'postgres',
     port: +process.env.DATABASE_PORT!,
     logging: false
});

