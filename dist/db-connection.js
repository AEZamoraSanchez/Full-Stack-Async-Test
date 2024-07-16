"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
require("dotenv/config");
const pg_1 = __importDefault(require("pg"));
exports.db = new sequelize_1.Sequelize({
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    dialect: 'postgres',
    dialectModule: pg_1.default,
    define: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci',
    },
    logging: false
});
//# sourceMappingURL=db-connection.js.map