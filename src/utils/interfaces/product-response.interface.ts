import { Model } from "sequelize";
import { Product } from "../../entities/product.entity";
import { ResponseController } from "./response.controller";

export type ProductResponse = Model<typeof Product>[] |Model<typeof Product> | ResponseController