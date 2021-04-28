"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_service_1 = require("./services/http.service");
const URL = 'https://naotw.mudd-dev.com';
async function main() {
    try {
        const { statusCode, body } = await http_service_1.fetch(URL);
        console.log(`statusCode: ${statusCode}`);
        console.log(`body: ${body.toString('utf-8')}`);
    }
    catch (err) {
        console.log(`error thrown; ${err.message}`);
    }
}
module.exports = main();
