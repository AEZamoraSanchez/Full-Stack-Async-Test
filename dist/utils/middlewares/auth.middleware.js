"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "No se proporciono" });
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_WORD);
        next();
    }
    catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }
};
exports.authMiddleware = authMiddleware;
