import { Operator, Selector } from './types'

export function find<S = any>(selector: Selector<S>): Operator<S> {
  return function findOperator(
    source: AsyncIterableIterator<S>
  ): AsyncIterableIterator<S> {
    return (async function* findGenerator() {
      let i = 0

      for await (const item of source) {
        if (await selector(item, i++)) {
          yield item
          break
        }
      }
    })()
  }
}
