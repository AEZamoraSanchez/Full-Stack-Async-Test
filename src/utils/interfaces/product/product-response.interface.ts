import { Model } from "sequelize";
import { Product } from "../../../entities/product.entity"
import { ResponseController } from "../response.controller";
import { ProductOutput } from "./product-output.interface";

export type ProductResponse = ProductOutput[] | ProductOutput | ResponseController