"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const client_1 = require("../../client");
async function runExample() {
    const client = client_1.createRPCClient(node_fetch_1.default, "http://localhost:3000/rpc");
    const greeting = await client.hello("worlds");
    const foo = await client.foo();
    const date = await client.getDate();
    const fortyTwo = await client.math(40, 2);
    console.log(greeting, foo, date.toLocaleDateString(), fortyTwo);
}
exports.runExample = runExample;
runExample();
