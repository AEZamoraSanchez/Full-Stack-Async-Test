import { Router, Response, Request } from "express";
import { ProductService } from "./product.service";
import { authMiddleware } from "../../utils/middlewares/auth.middleware";

const _productService = new ProductService();
const router = Router();

router.get("/", authMiddleware , async (req: Request, res: Response) => {
  try {
      const result = await _productService.getProducts();
      
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
      const result = await (_productService.getProductById(req.params.id));

      if('status' in result){
        return res.status(result.status).json({ error: result.message})
      }

      return res.status(200).json(result);
  }
  catch (error : any) {
    return res.status(500).json({ error: error?.message });
  }

   });
   
   router.post('/', authMiddleware, async (req: Request, res: Response) => {
    try {
      const result = await _productService.createProduct(req.body);
      
      if('status' in result){
        return res.status(result.status).json({ error: result.message})
      }

      return res.status(201).json(result);
    }
     catch (error : any) {
       res.status(500).json({ error: error?.message });
     }

   });
   
   router.patch('/:id', authMiddleware, async (req: Request, res: Response) => {
    try {
      const result = await _productService.updateProduct(req.params.id, req.body);

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

      const result = await _productService.deleteProduct( req.params.id)
      
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
   
   export const productRoutes = router;
