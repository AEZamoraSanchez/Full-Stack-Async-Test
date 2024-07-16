"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const product_controller_1 = require("./controllers/product/product.controller");
const user_controller_1 = require("./controllers/user/user.controller");
const auth_controller_1 = require("./controllers/auth/auth.controller");
const router = (0, express_1.Router)();
exports.router = router;
router.use('/product', product_controller_1.productRoutes);
router.use('/user', user_controller_1.userRoutes);
router.use('/auth', auth_controller_1.authRoutes);
//# sourceMappingURL=routes.index.js.map