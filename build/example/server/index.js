"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const express_1 = __importDefault(require("express"));
const server_1 = require("../../server");
const API_1 = require("./API");
const app = express_1.default();
const api = new API_1.API();
app.use(bodyParser.raw());
server_1.connectRPCFunctions(app, "/rpc", api);
app.listen(3000, () => console.log("server started on port 3000"));
