"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAsyncIterable = exports.isPromise = exports.isObject = exports.isFunction = void 0;
function isFunction(something) {
    return typeof something === 'function';
}
exports.isFunction = isFunction;
function isObject(something) {
    return something != null && Object(something) === something;
}
exports.isObject = isObject;
function isPromise(something) {
    return isObject(something) && isFunction(something.then);
}
exports.isPromise = isPromise;
function isAsyncIterable(something) {
    return isObject(something) && isFunction(something[Symbol.asyncIterator]);
}
exports.isAsyncIterable = isAsyncIterable;
//# sourceMappingURL=utils.js.map