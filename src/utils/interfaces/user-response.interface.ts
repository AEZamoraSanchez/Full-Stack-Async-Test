import { Model } from "sequelize"
import { User } from "../../entities/user.entity"
import { ResponseController } from "./response.controller"

export type UserResponse = Model<typeof User> | Model<typeof User>[] | ResponseController