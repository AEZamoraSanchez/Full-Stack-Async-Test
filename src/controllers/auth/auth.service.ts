import { User } from "../../entities/user.entity";
import { UserResponse } from "../../utils/interfaces/user/user-response.interface";
import { UserLoginDTO } from "./dto/userLogin.dto";
import bcrypt from "bcrypt";

export class AuthService {

     async signup ( user : any) : Promise<UserResponse> {
          try {
               try {
                    bcrypt.hash(user?.password, 10 )
                    const newUser = await User.create(user)
     
                    return newUser;
               }
               catch (error) {
                    throw error;
               }
          }
          catch (error) {
               throw error;
          }
     }

     async login ( user : UserLoginDTO) : Promise<UserResponse> {
          try {
               const userFound = await User.findOne({
                    where: {email : user.email}
               })

               if (!userFound) {
                    return { message: 'Usuario no encontrado', status: 404 };
               }
               



          }
          catch (error) {
               throw error;
          }
     }
}