import { db } from "../db-connection";
import { DataTypes, Model } from "sequelize";
import { UserAttributes } from "../utils/interfaces/user/user.attributes";
import { UserInput } from "../utils/interfaces/user/user-input.interface";

export class User extends Model<UserAttributes, UserInput> implements UserAttributes {
     public id! : string
     public name!: string;
     public email!: string;
     public password!: string;

}

 User.init(
     {
          id: {
               type: DataTypes.UUID,
               primaryKey: true,
               defaultValue: DataTypes.UUIDV4
          },
          name: DataTypes.STRING,

          email: DataTypes.STRING,
          
          password: DataTypes.STRING,
     },
     {
          timestamps: true,
          sequelize: db,
          paranoid: true,
          deletedAt: true
     }
)

export default User;