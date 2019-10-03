export type OfSource<S> = S | Promise<S>

export function of<S>(...args: OfSource<S>[]): AsyncIterableIterator<S> {
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
