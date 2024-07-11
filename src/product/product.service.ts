
export class ProductService {

     getProducts() {
          return "Todos los productos"
     }

     getProductById(id: number) {
          return `Producto con id ${id}`
     }

     createProduct(product: any) {
          return "Crear un nuevo producto"
     }

     updateProduct(id: number, product: any) {
          return `Actualizar producto con id ${id}`
     }

     deleteProduct(id: number) {
          return `Eliminar producto con id ${id}`
     }
}