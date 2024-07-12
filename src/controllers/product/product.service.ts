import { Model, Optional } from "sequelize";
import { Product } from "../../entities/product.entity"
import { ProductResponse } from "../../utils/interfaces/product-response.interface";
import { CreateProductDTO } from "./dto/createProduct.dto";


export class ProductService {

     async getProducts() : Promise<ProductResponse>{
          try {
               const products = await Product.findAll();
               
               if (!products) {
                    return { message: 'No hay productos', status: 404 }
               }

               return products;

             } catch (error) {
               throw error;
             }
     }

     async getProductById (id: string) : Promise<ProductResponse> {
          try {
               const productFound = await Product.findByPk(id);
               
               if (!productFound) {
                    return { message: 'Producto no encontrado', status: 404 }
               }

               return productFound;
          }
          catch (error) {
               throw error;
          }
     }

     async createProduct(product: Optional<CreateProductDTO, any> ) : Promise<ProductResponse> {
          try {

               const newProduct = await Product.create(product);

               return newProduct;
          }
          catch (error) {
               throw error;
          }
     }

     async updateProduct(id: string, productData: Partial<typeof Product>) : Promise<ProductResponse> {
          try {
               const [updatedRowsCount, [updatedProduct]] = await Product.update(productData, {
                 where: { id },
                 returning: true
               });
           
               if (updatedRowsCount === 0) {
                 return { message: 'Producto no encontrado para actualizar', status: 404 };
               }
           
               return updatedProduct;
             }
          catch (error) {
               throw error;
          }
     }

     async deleteProduct(id: number) {
          return `Eliminar producto con id ${id}`
     }
}