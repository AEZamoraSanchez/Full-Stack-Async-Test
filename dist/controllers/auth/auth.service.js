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
exports.AuthService = void 0;
const user_entity_1 = __importDefault(require("../../entities/user.entity"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthService {
    signup(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                try {
                    const passwordHashed = yield bcrypt_1.default.hash(user === null || user === void 0 ? void 0 : user.password, 10);
                    user.password = passwordHashed;
                    const newUser = yield user_entity_1.default.create(user);
                    return newUser;
                }
                catch (error) {
                    throw error;
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userFound = yield user_entity_1.default.findOne({
                    where: { email: user.email }
                });
                if (!userFound) {
                    return { message: 'Usuario no encontrado', status: 404 };
                }
                const isMatch = yield bcrypt_1.default.compare(user.password, userFound.password);
                if (!isMatch) {
                    return { message: 'Contraseña incorrecta', status: 401 };
                }
                return userFound;
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map