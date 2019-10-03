function of<S>(...args: S[] | Promise<S>[]): AsyncIterableIterator<S> {
    async function* generator(): AsyncGenerator<S, any, unknown> {
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