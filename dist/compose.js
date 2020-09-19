"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
const as_1 = require("./as");
function compose(...operators) {
    return function composed(source) {
        let iterator = source;
        for (let i = 0, steps = operators.length; i < steps; ++i) {
            iterator = as_1.as(operators[i](iterator));
        }
        return iterator;
    };
}
exports.compose = compose;
//# sourceMappingURL=compose.js.map