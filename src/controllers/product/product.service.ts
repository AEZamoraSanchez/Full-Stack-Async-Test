import Product from './../../entities/product.entity';
import { Model, Optional } from "sequelize";
import { ProductResponse } from '../../utils/interfaces/product/product-response.interface';
import { CreateProductDTO } from "./dto/createProduct.dto";
import { ResponseController } from "../../utils/interfaces/response.controller";
import { ProductInput } from '../../utils/interfaces/product/product-input.interface';



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

      async getTrialProducts () {
          try {
               const response = await fetch(process.env.URL_FAKE_STORE!);
               const data = await response.json();
               return data;
               
          }
          catch (error) {
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

     async createProduct(product: ProductInput ) : Promise<ProductResponse> {
          try {

               const newProduct = await Product.create(product);

               return newProduct;
          }
          catch (error) {
               throw error;
          }
     }

     async updateProduct(id: string, productData: Partial<ProductInput>) : Promise<ProductResponse> {
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

     async deleteProduct(id: string) : Promise<ResponseController | void> {
          try {
               const productFound = await Product.findByPk(id);

               if (!productFound) {
                    return { message: 'Producto no encontrado para eliminar', status: 404 };
               }

               const productDeleted = await productFound.destroy();
          }
          catch (error) {
               throw error;
          }
     }

     async deleteAllProducts() : Promise<ResponseController | void> {
          try {
               console.log('Iniciando eliminación de productos en segundo plano...');

               const result = await Product.destroy({ 
                    where: {},
                    truncate: true
               });

               console.log(`Se han eliminado ${result} productos.`);
          }
          catch (error) {
               console.error('Error al eliminar productos:', error);
          }
     }

     async deleteInBackground () {
          setImmediate(this.deleteAllProducts)
     }
}