
export class UserService {

     getUsers() {
          return "Todos los usuarios"
     }

     getUserById(id: number) {
          return `Usuario con id ${id}`
     }

     createUser(product: any) {
          return "Crear un nuevo usuario"
     }

     updateUser(id: number, product: any) {
          return `Actualizar usuario con id ${id}`
     }

     deleteUser(id: number) {
          return `Eliminar usuario con id ${id}`
     }
}