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
const express_1 = __importDefault(require("express"));
const routes_index_1 = require("./routes.index");
const db_connection_1 = require("./db-connection");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const initApp = () => __awaiter(void 0, void 0, void 0, function* () {
    const port = process.env.PORT || 3200;
    try {
        yield db_connection_1.db.authenticate();
        console.log('Connection to the database has been established successfully.');
        yield db_connection_1.db.sync({ force: false });
        console.log('All models were synchronized successfully.');
        app.use(express_1.default.json());
        app.use((0, cors_1.default)({
            origin: process.env.URL_FRONT
        }));
        app.get('/', function (req, res) {
            res.send(' Hello there');
        });
        app.use('/', routes_index_1.router);
        app.listen(port, function () {
            console.log(`App listening on port ${port}`);
        });
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
});
initApp();
exports.default = app;
