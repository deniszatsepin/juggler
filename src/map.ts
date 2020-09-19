import { Operator } from './types'

export type Transformator<S, R = S> = (value: S, index: number) => R

export function map<S = any, R = S>(
  selector: Transformator<S, R>
): Operator<S, R> {
  return function mapOperator(
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

export function mapp<S = any, R = S>(
  transform: Transformator<S, R>
): Operator<S, R> {
  return function mapOperator(
    source: AsyncIterableIterator<S>
  ): AsyncIterableIterator<R> {
    const _source = source[Symbol.asyncIterator]
      ? source[Symbol.asyncIterator]()
      : source
    let index = 0

    return {
      [Symbol.asyncIterator]() {
        index = 0
        return this
      },
      async next() {
        const n = await _source.next()

        if (n.done) {
          return n
        }

        const value = transform(n.value, index++)

        return {
          value,
        }
      },
    }
  }
}
