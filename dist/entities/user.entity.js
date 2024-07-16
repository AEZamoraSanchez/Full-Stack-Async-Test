"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const db_connection_1 = require("../db-connection");
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.DataTypes.UUIDV4
    },
    name: sequelize_1.DataTypes.STRING,
    email: sequelize_1.DataTypes.STRING,
    password: sequelize_1.DataTypes.STRING,
}, {
    timestamps: true,
    sequelize: db_connection_1.db,
    paranoid: true,
    deletedAt: true
});
exports.default = User;
//# sourceMappingURL=user.entity.js.map