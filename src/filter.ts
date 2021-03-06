import { Operator, Selector } from './types'

export function filter<S = any>(selector: Selector<S>): Operator<S> {
  return function filterOperator(
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
