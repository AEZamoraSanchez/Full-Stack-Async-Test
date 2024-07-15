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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const product_service_1 = require("./product.service");
const auth_middleware_1 = require("../../utils/middlewares/auth.middleware");
const _productService = new product_service_1.ProductService();
const router = (0, express_1.Router)();
router.get("/all", auth_middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield _productService.getProducts();
        if ('status' in result) {
            return res.status(result.status).json({ error: result.message });
        }
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ error: error === null || error === void 0 ? void 0 : error.message });
    }
}));
router.get("/:size/:index", auth_middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield _productService.getFiftyProducts(+req.params.size, +req.params.index);
        if ('status' in result) {
            return res.status(result.status).json({ error: result.message });
        }
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ error: error === null || error === void 0 ? void 0 : error.message });
    }
}));
router.get("/trial", auth_middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield _productService.getTrialProducts();
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ error: error === null || error === void 0 ? void 0 : error.message });
    }
}));
router.get('/:id', auth_middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (_productService.getProductById(req.params.id));
        if ('status' in result) {
            return res.status(result.status).json({ error: result.message });
        }
        return res.status(200).json(result);
    }
    catch (error) {
        return res.status(500).json({ error: error === null || error === void 0 ? void 0 : error.message });
    }
}));
router.post('/', auth_middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield _productService.createProduct(req.body);
        if ('status' in result) {
            return res.status(result.status).json({ error: result.message });
        }
        return res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({ error: error === null || error === void 0 ? void 0 : error.message });
    }
}));
router.patch('/:id', auth_middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield _productService.updateProduct(req.params.id, req.body);
        if ('status' in result) {
            return res.status(result.status).json({ error: result.message });
        }
        return res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: error === null || error === void 0 ? void 0 : error.message });
    }
}));
router.delete('/:id', auth_middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield _productService.deleteProduct(req.params.id);
        if (result) {
            if ('status' in result) {
                return res.status(result.status).json({ error: result.message });
            }
        }
        return res.status(204).json({ message: 'Product deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error === null || error === void 0 ? void 0 : error.message });
    }
}));
router.delete('/', auth_middleware_1.authMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        _productService.deleteInBackground();
        res.json({ message: 'Deletion started in the background' });
    }
    catch (error) {
        res.status(500).json({ error: error === null || error === void 0 ? void 0 : error.message });
    }
}));
exports.productRoutes = router;
