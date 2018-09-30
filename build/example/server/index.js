"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const server_1 = require("../../server");
const API_1 = require("./API");
const app = express_1.default();
const api = new API_1.API();
app.use(body_parser_1.raw());
server_1.connectRemoteFunctions(app, "/rpc", api);
app.listen(3000, () => console.log("server started on port 3000"));
