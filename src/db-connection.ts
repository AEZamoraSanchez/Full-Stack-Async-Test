import { Sequelize } from "sequelize";
import 'dotenv/config'
if(process.env.DATABASE_NAME){
     
}
export const db = new Sequelize(process.env.DATABASE_URL!, {
     dialect: 'postgres',
     dialectOptions: {
          ssl: {
              require: true,
              rejectUnauthorized: false
          }
     }
});

