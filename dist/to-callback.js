"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCallbackFactory = void 0;
const pipe_1 = require("./pipe");
const of_1 = require("./of");
// TODO: refactor it
function toCallbackFactory(source) {
    return function (...args) {
        const callback = args[args.length - 1];
        const restArgs = args.slice(0, args.length - 1);
        pipe_1.pipe(of_1.of(restArgs), source);
        source[Symbol.asyncIterator]()
            .next()
            .then((result) => {
            callback(null, result);
        })
            .catch((error) => {
            callback(error);
        });
    };
}
exports.toCallbackFactory = toCallbackFactory;
//# sourceMappingURL=to-callback.js.map