"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.of = void 0;
function of(...args) {
    let _subsciber;
    let pushed = 0;
    const total = args.length;
    let cancelled = false;
    async function request(n) {
        if (cancelled)
            return;
        const requested = Math.min(n, total - pushed);
        const max = pushed + requested;
        for (let i = pushed; i < max; i++) {
            pushed++;
            _subsciber.onNext(args[i]);
        }
        if (pushed >= total) {
            _subsciber.onComplete();
        }
    }
    function cancel() {
        cancelled = true;
    }
    return {
        subscribe(subscriber) {
            _subsciber = subscriber;
            return [request, cancel];
        },
    };
}
exports.of = of;
const [request, cancel] = of(1, 2, 3).subscribe({
    onNext(e) {
        console.log(e);
    },
    onComplete() {
        console.log('complete');
    },
    onError(e) {
        console.error(e);
    },
});
request(200);
cancel();
//# sourceMappingURL=of.js.map