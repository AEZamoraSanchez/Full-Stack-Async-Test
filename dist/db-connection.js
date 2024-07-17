"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
require("dotenv/config");
const pg_1 = __importDefault(require("pg"));
exports.db = new sequelize_1.Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectModule: pg_1.default,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    },
    logging: false
});
//# sourceMappingURL=db-connection.js.map