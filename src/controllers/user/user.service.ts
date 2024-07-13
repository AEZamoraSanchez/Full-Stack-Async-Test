import { Optional } from "sequelize";
import { User } from "../../entities/user.entity"
import { ResponseController } from "../../utils/interfaces/response.controller"
import { UserResponse } from "../../utils/interfaces/user-response.interface";
import { createUserDTO } from "./dto/createUser.dto";
export class UserService {

     async getUsers() : Promise<UserResponse>{
          try {
               const users = await User.findAll();

               if (!users){
                    return { message : "No hay usuarios", status: 404}
               }

               return users;
          
          }

          catch (error) {
               throw error;
          }
     }

     async getUserById(id: string) : Promise<UserResponse> {
          try {
               const userFound = await User.findByPk(id);

               if (!userFound) {
                    return { message: 'Usuario no encontrado', status: 404 };
               }

               return userFound;
          }
          catch (error) {
               throw error;
          }
     }

     async createUser(user: Partial<typeof User>) : Promise<UserResponse> {

          try {
               const newUser = await User.create(user)

               return newUser;
          }
          catch (error) {
               throw error;
          }
     }

     async updateUser(id: string, userData: Partial<typeof User>) {
          
          try {
               const [updatedRowsCount, [updatedUser]] = await User.update(userData, {
                    where: { id },
                    returning: true
                  });
              
                  if (updatedRowsCount === 0) {
                    return { message: 'User no encontrado para actualizar', status: 404 };
                  } 
              
                  return updatedUser;
          }
          catch (error) {
               throw error;
          }
     }

     async deleteUser(id: string) : Promise<ResponseController | void> {
          try {
               const userFound = await User.findByPk(id);

               if (!userFound) {
                    return { message: 'Usuario no encontrado para eliminar', status: 404 };
               }

               const userDeleted = await userFound.destroy();
          }
          catch (error) {
               throw error;
          }
     }
}