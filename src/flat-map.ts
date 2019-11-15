import { Operator } from './types'

export type IterableTransformator<S, R = S> = (
  value: S,
  index: number
) => AsyncIterable<R> | Promise<AsyncIterable<R>>

export function flatMap<S = any, R = S>(
  transform: IterableTransformator<S, R>
): Operator<S, R> {
  return function flaatMapOperator(
    source: AsyncIterableIterator<S>
  ): AsyncIterableIterator<R> {
    return (async function* generator() {
      let i = 0
      for await (const item of source) {
        const iterator = await transform(item, i++)

        for await (const subItem of iterator) {
          yield subItem
        }
      }
    })()
  }
}
