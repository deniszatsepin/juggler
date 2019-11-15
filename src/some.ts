import { Operator, Selector } from './types'

export function some<S = any>(selector: Selector<S>): Operator<S, boolean> {
  return function someOperator(
    source: AsyncIterableIterator<S>
  ): AsyncIterableIterator<boolean> {
    return (async function* someGenerator() {
      let i = 0

      for await (const item of source) {
        if (await selector(item, i++)) {
          yield true
          break
        }
      }
    })()
  }
}
