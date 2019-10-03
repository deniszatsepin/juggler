import { Operator } from './pipe'

export type Selector<S, R = S> = (value: S, index: number) => Promise<R> | R

export function map<S = any, R = S>(selector: Selector<S, R>): Operator<S, R> {
  return function operator(
    source: AsyncIterableIterator<S>
  ): AsyncIterableIterator<R> {
    return (async function* generator() {
      let i = 0
      for await (const item of source) {
        yield await selector(item, i++)
      }
    })()
  }
}
