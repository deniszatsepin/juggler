import { Operator } from './types'

export type Reducer<S, R = S> = (
  accumulator: R,
  value: S,
  index: number
) => Promise<R> | R

export function reduce<S = any, R = S>(
  reducer: Reducer<S, R>,
  initial: R
): Operator<S, R> {
  return function reduceOperator(
    source: AsyncIterableIterator<S>
  ): AsyncIterableIterator<R> {
    return (async function* generator() {
      let i = 0
      let prev

      for await (const item of source) {
        if (i === 0) {
          prev = await reducer(initial, item, i++)
        } else {
          prev = await reducer(prev, item, i++)
        }
      }

      yield prev
    })()
  }
}
