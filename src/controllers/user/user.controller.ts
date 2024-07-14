import { Router, Request, Response } from "express";
import { UserService } from "./user.service";
import { authMiddleware } from '../../utils/middlewares/auth.middleware';

   const router = Router();
   
   const _userService = new UserService();

   router.get("/", authMiddleware, async (req: Request, res: Response) => {
      try {
          const result = await _userService.getUsers();
          
          if('status' in result){
            return res.status(result.status).json({ error: result.message})
          }
    
          return res.status(200).json(result);
      }
      catch (error : any) {
        return res.status(500).json({ error: error?.message });
      }
    });
    
    router.get('/:id', authMiddleware, async (req: Request, res: Response) => {
      try {
          const result = await (_userService.getUserById(req.params.id));
    
          if('status' in result){
            return res.status(result.status).json({ error: result.message})
          }
    
          return res.status(200).json(result);
      }
      catch (error : any) {
        return res.status(500).json({ error: error?.message });
      }
    
       });
       
      //  router.post('/', async (req: Request, res: Response) => {
      //   try {
      //     const result = await _userService.createUser(req.body);
          
      //     if('status' in result){
      //       return res.status(result.status).json({ error: result.message})
      //     }
    
      //     return res.status(201).json(result);
      //   }
      //    catch (error : any) {
      //      res.status(500).json({ error: error?.message });
      //    }
    
      //  });
       
       router.patch('/:id', authMiddleware, async (req: Request, res: Response) => {
        try {
          const result = await _userService.updateUser(req.params.id, req.body);
    
          if('status' in result){
            return res.status(result.status).json({ error: result.message})
          }
    
          return res.json(result);
        }
         catch (error : any) {
           res.status(500).json({ error: error?.message });
         }
       });
       
       router.delete('/:id', authMiddleware, async (req: Request, res: Response) => {
        try {
    
          const result = await _userService.deleteUser( req.params.id)
          
          if (result){
            if('status' in result){
              return res.status(result.status).json({ error: result.message})
            }
          }
    
           return res.status(204).json({ message: 'Product deleted successfully'});
        }
         catch (error : any) {
           res.status(500).json({ error: error?.message });
         }
       });

     export const userRoutes = router