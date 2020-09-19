"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapp = exports.map = void 0;
function map(selector) {
    return function mapOperator(source) {
        return (function generator() {
            return __asyncGenerator(this, arguments, function* generator_1() {
                var e_1, _a;
                let i = 0;
                try {
                    for (var source_1 = __asyncValues(source), source_1_1; source_1_1 = yield __await(source_1.next()), !source_1_1.done;) {
                        const item = source_1_1.value;
                        yield yield __await(yield __await(selector(item, i++)));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (source_1_1 && !source_1_1.done && (_a = source_1.return)) yield __await(_a.call(source_1));
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        })();
    };
}
exports.map = map;
function mapp(selector) {
    return function mapOperator(source) {
        return {
            [Symbol.asyncIterator]() {
                return __asyncGenerator(this, arguments, function* _a() {
                    var e_2, _b;
                    let i = 0;
                    try {
                        for (var source_2 = __asyncValues(source), source_2_1; source_2_1 = yield __await(source_2.next()), !source_2_1.done;) {
                            const item = source_2_1.value;
                            yield yield __await(yield __await(selector(item, i++)));
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (source_2_1 && !source_2_1.done && (_b = source_2.return)) yield __await(_b.call(source_2));
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                });
            },
        };
    };
}
exports.mapp = mapp;
//# sourceMappingURL=map.js.map