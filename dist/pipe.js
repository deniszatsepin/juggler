"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
const as_1 = require("./as");
function pipe(source, ...operators) {
    let iterator = source;
    for (let i = 0, steps = operators.length; i < steps; ++i) {
        iterator = as_1.as(operators[i](iterator));
    }
    return iterator;
}
exports.pipe = pipe;
//# sourceMappingURL=pipe.js.map