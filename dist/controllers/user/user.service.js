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
exports.UserService = void 0;
const user_entity_1 = __importDefault(require("../../entities/user.entity"));
class UserService {
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield user_entity_1.default.findAll();
                if (!users) {
                    return { message: "No hay usuarios", status: 404 };
                }
                return users;
            }
            catch (error) {
                throw error;
            }
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userFound = yield user_entity_1.default.findByPk(id);
                if (!userFound) {
                    return { message: 'Usuario no encontrado', status: 404 };
                }
                return userFound;
            }
            catch (error) {
                throw error;
            }
        });
    }
    // async createUser(user: UserInput) : Promise<UserResponse> {
    //      try {
    //           const newUser = await User.create(user)
    //           return newUser;
    //      }
    //      catch (error) {
    //           throw error;
    //      }
    // }
    updateUser(id, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [updatedRowsCount, [updatedUser]] = yield user_entity_1.default.update(userData, {
                    where: { id },
                    returning: true
                });
                if (updatedRowsCount === 0) {
                    return { message: 'User no encontrado para actualizar', status: 404 };
                }
                return updatedUser;
            }
            catch (error) {
                throw error;
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userFound = yield user_entity_1.default.findByPk(id);
                if (!userFound) {
                    return { message: 'Usuario no encontrado para eliminar', status: 404 };
                }
                const userDeleted = yield userFound.destroy();
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.UserService = UserService;
