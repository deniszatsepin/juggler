function of<R, T extends Promise<R>>(...args: T[]): AsyncIterableIterator<R>
function of<R, T extends R>(...args: R[]): AsyncIterableIterator<R>
function of<R, T>(...args: T[]): AsyncIterableIterator<R> {
    async function* generator() {
        for (const el of args) {
            if (el instanceof Promise) {
                yield await el
            } else {
                yield el
            }
        }
    }

    return generator()
}

export default of