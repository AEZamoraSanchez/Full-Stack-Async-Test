import { Sequelize } from "sequelize";
import 'dotenv/config'
if(process.env.DATABASE_NAME){
     
}
export const db = new Sequelize(process.env.DATABASE_NAME || '', process.env.DATABASE_USER || '', process.env.DATABASE_PASSWORD, {
     host: 'localhost',
     dialect: 'postgres',
     port: 5555,
     logging: false
});

