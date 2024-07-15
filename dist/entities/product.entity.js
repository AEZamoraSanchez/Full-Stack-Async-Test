"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const db_connection_1 = require("../db-connection");
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
}
exports.Product = Product;
Product.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    name: sequelize_1.DataTypes.STRING,
    description: sequelize_1.DataTypes.TEXT,
    price: sequelize_1.DataTypes.DECIMAL(10, 2),
    images: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        defaultValue: []
    }
}, {
    timestamps: true,
    sequelize: db_connection_1.db,
    paranoid: true,
    deletedAt: true
});
exports.default = Product;
