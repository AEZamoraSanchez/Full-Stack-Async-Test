import { db } from "../db-connection";
import { DataTypes, Model } from "sequelize";
import { ProductAttributes } from "../utils/interfaces/product/product.attributes";
import { ProductInput } from "../utils/interfaces/product/product-input.interface";
import { defaultValueSchemable } from "sequelize/types/utils";

class Product extends Model<ProductAttributes, ProductInput> implements ProductAttributes {
     public id!: string
     public name!: string
     public description!: string
     public price!: number
     public images!: string[]
}

Product.init({
     
          id: {
               type: DataTypes.UUID,
               primaryKey: true,
               defaultValue: DataTypes.UUIDV4
          },
          name: DataTypes.STRING,

          description: DataTypes.TEXT,

          price: DataTypes.DECIMAL(10, 2),

          images: {
               type : DataTypes.ARRAY(DataTypes.STRING),
               defaultValue : []
          }
     },   
     {
          timestamps: true,
          sequelize: db,
          paranoid: true,
          deletedAt: true
     }

)

export default Product;