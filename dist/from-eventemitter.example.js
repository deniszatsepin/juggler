"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const from_eventemitter_1 = require("./from-eventemitter");
const server = http_1.createServer();
server.on('connection', (socket) => {
    console.log('connection established');
});
server.on('request', (request, response) => {
    console.log('event request: ', request.url);
});
async function pause(timeout) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}
server.on('close', () => console.log('server closed'));
const delays = [10000, 5000, 2000, 500];
let i = 0;
(async function () {
    var e_1, _a;
    const iterator = from_eventemitter_1.eventGenerator(server, 'request');
    try {
        for (var iterator_1 = __asyncValues(iterator), iterator_1_1; iterator_1_1 = await iterator_1.next(), !iterator_1_1.done;) {
            const [request, response] = iterator_1_1.value;
            console.log('iterator request: ', request.url);
            const delay = delays[i++] || 1000;
            console.log('delay: ', delay);
            pause(delay);
            console.log('iterator response: ', request.url);
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.write('hello world');
            response.end();
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (iterator_1_1 && !iterator_1_1.done && (_a = iterator_1.return)) await _a.call(iterator_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
})();
server.listen(8888);
//# sourceMappingURL=from-eventemitter.example.js.map