import { Router, Request, Response } from "express";
import { UserService } from "./user.service";

   const router = Router();
   
   const _userService = new UserService();

     router.get("/", (req: Request, res: Response) => {
         const users = _userService.getUsers()
         res.send(users);
     });
   
     router.get('/:id', (req: Request, res: Response) => {
         const user = _userService.getUserById(parseInt(req.params.id))
        res.send(user);
     });
      
     router.post('/', (req: Request, res: Response) => {
       const userCreated = _userService.createUser(req.body)
        res.send(userCreated);
     });
      
     router.put('/:id', (req: Request, res: Response) => {
      const userUpdated = _userService.updateUser(parseInt(req.params.id), req.body)
        res.send(userUpdated);
     });
      
     router.delete('/:id', (req: Request, res: Response) => {
      const userDeleted = _userService.deleteUser(parseInt(req.params.id))
        res.send(userDeleted);
     });

     export const userRoutes = router