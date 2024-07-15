"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_entity_1 = __importDefault(require("./../../entities/product.entity"));
class ProductService {
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield product_entity_1.default.findAll();
                if (!products) {
                    return { message: 'No hay productos', status: 404 };
                }
                return products;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getFiftyProducts(size, index) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const offset = size * index;
                const products = yield product_entity_1.default.findAll({
                    offset: offset,
                    limit: size
                });
                if (!products) {
                    return { message: 'No hay productos', status: 404 };
                }
                return products;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getTrialProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(process.env.URL_FAKE_STORE);
                const data = yield response.json();
                return data;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productFound = yield product_entity_1.default.findByPk(id);
                if (!productFound) {
                    return { message: 'Producto no encontrado', status: 404 };
                }
                return productFound;
            }
            catch (error) {
                throw error;
            }
        });
    }
    createProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newProduct = yield product_entity_1.default.create(product);
                return newProduct;
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateProduct(id, productData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [updatedRowsCount, [updatedProduct]] = yield product_entity_1.default.update(productData, {
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
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productFound = yield product_entity_1.default.findByPk(id);
                if (!productFound) {
                    return { message: 'Producto no encontrado para eliminar', status: 404 };
                }
                const productDeleted = yield productFound.destroy();
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('Iniciando eliminación de productos en segundo plano...');
                const result = yield product_entity_1.default.destroy({
                    where: {},
                    truncate: true
                });
                console.log(`Se han eliminado ${result} productos.`);
            }
            catch (error) {
                console.error('Error al eliminar productos:', error);
            }
        });
    }
    deleteInBackground() {
        return __awaiter(this, void 0, void 0, function* () {
            setImmediate(this.deleteAllProducts);
        });
    }
}
exports.ProductService = ProductService;
