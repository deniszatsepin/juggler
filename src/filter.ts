import { Operator } from './types'

export type Selector<S> = (
  value: S,
  index: number
) => Promise<Boolean> | Boolean

export function filter<S = any>(selector: Selector<S>): Operator<S> {
  return function reduceOperator(
    source: AsyncIterableIterator<S>
  ): AsyncIterableIterator<S> {
    return (async function* generator() {
      let i = 0

      for await (const item of source) {
        if (await selector(item, i++)) {
          yield item
        }
      }
    })()
  }
}
