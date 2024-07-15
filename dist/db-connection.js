"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
require("dotenv/config");
if (process.env.DATABASE_NAME) {
}
exports.db = new sequelize_1.Sequelize(process.env.DATABASE_NAME || '', process.env.DATABASE_USER || '', process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5555,
    logging: false
});
