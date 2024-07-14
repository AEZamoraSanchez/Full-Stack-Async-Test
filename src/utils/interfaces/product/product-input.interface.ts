import { Optional } from "sequelize";
import { ProductAttributes } from "./product.attributes";

export interface ProductInput extends Optional<ProductAttributes, 'id'> {}