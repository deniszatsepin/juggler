"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPromise = void 0;
async function toPromise(source) {
    return (await source[Symbol.asyncIterator]().next()).value;
}
exports.toPromise = toPromise;
//# sourceMappingURL=to-promise.js.map