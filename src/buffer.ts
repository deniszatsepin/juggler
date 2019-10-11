import { Operator } from './types'

export function buffer<S = any>(copacity?: number): Operator<S, S[]> {
  const isUndefined = copacity === undefined

  if (typeof copacity !== 'number' && !isUndefined) {
    throw new TypeError('Copacity should be a number or undefined')
  }

  const c = isUndefined ? 0 : copacity

  return function mapOperator(
    source: AsyncIterableIterator<S>
  ): AsyncIterableIterator<S[]> {
    return (async function* generator() {
      let buffer = []

      for await (const item of source) {
        buffer.push(item)

        if (c > 0 && buffer.length === c) {
          yield buffer
          buffer = []
        }
      }

      if (buffer.length || c === 0) {
        yield buffer
      }
    })()
  }
}
