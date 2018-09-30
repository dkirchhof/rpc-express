"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const msgpack_lite_1 = require("msgpack-lite");
function connectRPCFunctions(app, endpoint, rpcFunctions) {
    app.post(endpoint, async (req, res) => {
        const { method, params } = msgpack_lite_1.decode(req.body);
        const result = await rpcFunctions[method](...params || []);
        res.send(msgpack_lite_1.encode(result));
    });
}
exports.connectRPCFunctions = connectRPCFunctions;
