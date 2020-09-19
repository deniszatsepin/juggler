"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nmt = void 0;
const filter_1 = require("./filter");
const map_1 = require("./map");
const to_promise_1 = require("./to-promise");
const of_1 = require("./of");
const collect_1 = require("./collect");
const pipe_1 = require("./pipe");
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
    const transformator = pipe_1.pipe(of_1.off(...paperTypesInfo), filter_1.filter((materialType) => !!materialType), map_1.mapp((materialType) => (Object.assign(Object.assign({}, materialType), { name: capitalize(materialType.name), description: capitalize(materialType.description) }))), collect_1.collect);
    const total = await to_promise_1.toPromise(transformator);
    // console.log('Total: ', total)
}
exports.nmt = nmt;
function capitalize(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
;
(async () => {
    console.time('Juggler');
    for (let i = 0; i < 10000; i++) {
        await nmt();
    }
    console.timeEnd('Juggler');
})();
//# sourceMappingURL=example.juggler.js.map