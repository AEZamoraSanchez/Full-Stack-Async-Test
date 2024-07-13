import { db } from "../db-connection";
import { DataTypes } from "sequelize";

export const User = db.define(
     'User',
     {
          id: {
               type: DataTypes.UUID,
               primaryKey: true,
               defaultValue: DataTypes.UUIDV4
          },
          name: DataTypes.STRING,

          email: DataTypes.STRING,
          
          password: DataTypes.STRING,
     }
)