import { Router, Response, Request } from "express";
import { ProductService } from "./product.service";

const _productService = new ProductService();
const router = Router();

router.get("/", (req: Request, res: Response) => {

  const products = _productService.getProducts();
  res.send(products);
});

router.get('/:id', (req: Request, res: Response) => {
  const product = _productService.getProductById(parseInt(req.params.id));
     res.send(product);
   });
   
   router.post('/', (req: Request, res: Response) => {
     const productCreated = _productService.createProduct(req.body);
     res.send(productCreated);
   });
   
   router.put('/:id', (req: Request, res: Response) => {

     const productUpdated = _productService.updateProduct(parseInt(req.params.id), req.body);
     res.send(productUpdated);
   });
   
   router.delete('/:id', (req: Request, res: Response) => {
    const productDeleted = _productService.deleteProduct( parseInt(req.params.id))
     res.send(productDeleted);
   });
   
   export const productRoutes = router;
