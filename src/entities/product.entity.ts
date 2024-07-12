import { db } from "../db-connection";
import { DataTypes } from "sequelize";

export const Product = db.define(
     'Product',
     {
          id: {
               type: DataTypes.UUID,
               primaryKey: true,
               defaultValue: DataTypes.UUIDV4
          },
          name: DataTypes.STRING,

          description: DataTypes.TEXT,

          price: DataTypes.DECIMAL(10, 2)
     }
)