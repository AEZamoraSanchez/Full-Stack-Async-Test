import { Optional } from "sequelize";
import { UserAttributes } from "./user.attributes";


export interface UserInput extends Optional<UserAttributes, 'id'>{}