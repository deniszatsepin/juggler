"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nmt = void 0;
const asynciterable_1 = require("ix/asynciterable");
const operators_1 = require("ix/asynciterable/operators");
const paperTypesInfo = [
    {
        id: 1,
        name: 'mt1',
        description: 'desc1',
        code: 'code1',
    },
    {
        id: 2,
        name: 'mt2',
        description: 'desc2',
        code: 'code2',
    },
    {
        id: 3,
        name: 'mt3',
        description: 'desc3',
        code: 'code3',
    },
    null,
];
async function nmt() {
    const transform = asynciterable_1.of(...paperTypesInfo).pipe(operators_1.filter((materialType) => !!materialType), operators_1.map((materialType) => (Object.assign(Object.assign({}, materialType), { name: capitalize(materialType.name), description: capitalize(materialType.description) }))));
    const total = await asynciterable_1.toArray(transform);
    // console.log('Total: ', total)
}
exports.nmt = nmt;
function capitalize(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
;
(async () => {
    console.time('IX');
    for (let i = 0; i < 10000; i++) {
        await nmt();
    }
    console.timeEnd('IX');
})();
//# sourceMappingURL=example.ix.js.map