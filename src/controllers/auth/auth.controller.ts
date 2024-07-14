import { Router, Response, Request } from "express";
import { AuthService } from "./auth.service";

const _authService = new AuthService();
const router = Router();
   router.post('/signup', async (req: Request, res: Response) => {
    try {
      const result = await _authService.signup(req.body);
      
      if('status' in result){
        return res.status(result.status).json({ error: result.message})
      }

      return res.status(201).json(result);
    }
     catch (error : any) {
       res.status(500).json({ error: error?.message });
     }

  });

   router.post('/login', async (req: Request, res: Response) => {
    try {
      const result = await _authService.login(req.body);
      
      if('status' in result){
        return res.status(result.status).json({ error: result.message})
      }

      return res.status(200).json(result);
    }
     catch (error : any) {
       res.status(500).json({ error: error?.message });
     }

   });

   
   export const authRoutes = router;
