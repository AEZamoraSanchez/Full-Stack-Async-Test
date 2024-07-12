import { Model } from "sequelize";
import { Product } from "../../entities/product.entity";

export type ProductResponse = Model<typeof Product>[] |Model<typeof Product> | {
     status: number;
     message: string;
}