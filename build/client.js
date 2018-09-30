"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const msgpack_lite_1 = require("msgpack-lite");
function createRPCClient(fetch, endpoint) {
    return new Proxy({}, {
        get(_, key) {
            return (...args) => doRequest(fetch, endpoint, key, args);
        }
    });
}
exports.createRPCClient = createRPCClient;
async function doRequest(fetch, endpoint, method, params) {
    const request = {
        headers: { "content-type": "application/octet-stream" },
        method: "post",
        body: msgpack_lite_1.encode({ method, params })
    };
    const response = await fetch(endpoint, request);
    const buffer = await response.arrayBuffer();
    return msgpack_lite_1.decode(new Uint8Array(buffer));
}
