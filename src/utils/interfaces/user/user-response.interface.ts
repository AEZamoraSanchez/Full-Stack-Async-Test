import { Model } from "sequelize"
import { User } from "../../../entities/user.entity"
import { ResponseController } from "../response.controller"
import { UserOutput } from "./user-output.interface"

export type UserResponse = UserOutput | UserOutput[] | ResponseController