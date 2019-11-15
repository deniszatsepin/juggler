import { Operator, SideEffect } from './types'

export function tap<S = any>(handler: SideEffect<S>): Operator<S> {
  return function tapOperator(
    source: AsyncIterableIterator<S>
  ): AsyncIterableIterator<S> {
    return (async function* tapGenerator() {
      let i = 0

      for await (const item of source) {
        handler(item, i++)
        yield item
      }
    })()
  }
}
