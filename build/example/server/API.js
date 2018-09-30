"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class API {
    hello(name) {
        return Promise.resolve(`hello ${name}`);
    }
    foo() {
        return Promise.resolve("bar");
    }
    getDate() {
        return Promise.resolve(new Date());
    }
    math(a, b) {
        return Promise.resolve(a + b);
    }
}
exports.API = API;
