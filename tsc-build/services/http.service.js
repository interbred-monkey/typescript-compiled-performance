"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = void 0;
const https_1 = require("https");
function fetch(url) {
    return new Promise((resolve) => {
        https_1.get(url, (res) => {
            handleError(res.statusCode);
            let body;
            res
                .on('data', (chunk) => {
                body += chunk;
            })
                .on('end', () => {
                return resolve({ statusCode: res.statusCode, body });
            });
        }).on('error', (error) => {
            throw new Error(`request threw error: ${error.message}`);
        });
    });
}
exports.fetch = fetch;
function handleError(statusCode) {
    if (statusCode !== 200) {
        throw new Error(`the server responded with a none 200 statusCode; ${statusCode}`);
    }
}
