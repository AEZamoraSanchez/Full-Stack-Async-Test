import User from '../../entities/user.entity'
import { ResponseController } from '../../utils/interfaces/response.controller';
import { UserInput } from '../../utils/interfaces/user/user-input.interface';
import { UserOutput } from '../../utils/interfaces/user/user-output.interface';
import { UserLoginDTO } from "./dto/userLogin.dto";
import bcrypt from "bcrypt";

export class AuthService {

     async signup ( user : UserInput) : Promise<UserOutput | ResponseController> {
          try {
               try {
                    const passwordHashed = await bcrypt.hash(user?.password, 10 )

                    user.password = passwordHashed;
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

     async login ( user : UserLoginDTO) : Promise<UserOutput | ResponseController> {
          try {
               const userFound = await User.findOne({
                    where: {email : user.email}
               })

               if (!userFound) {
                    return { message: 'Usuario no encontrado', status: 404 };
               }
               
              const isMatch = await bcrypt.compare(user.password, userFound.password)

               if (!isMatch) {
                    return { message: 'Contraseña incorrecta', status: 401 };
               }

               return userFound;


          }
          catch (error) {
               throw error;
          }
     }
}