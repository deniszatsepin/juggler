import { isPromise } from './utils'

export type OfSource<S> = S | Promise<S>

export function of<S>(...args: OfSource<S>[]): AsyncIterable<S> {
  return (async function* ofGenerator() {
    for (const el of args) {
      if (isPromise(el)) {
        yield await el
      } else {
        yield el
      }
    }
  })()
}
