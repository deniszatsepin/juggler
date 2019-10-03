import { Operator } from "./pipe"

export function collect<S = any>(): Operator<S, S[]> {
  return function collectOperator(
    source: AsyncIterable<S>
  ): AsyncIterable<S[]> {
    return (async function* generator() {
      const buffer = []
      for await (const item of source) {
        buffer.push(item)
      }
      yield buffer
    })()
  }
}