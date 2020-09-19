import { isPromise } from './utils'

export type OfSource<S> = S | Promise<S>

export function of<S>(...args: OfSource<S>[]): AsyncIterable<S> {
  return (async function* ofGenerator() {
    for (const el of args) {
      if (isPromise(el)) {
        yield await el
      } else {
        yield el
      }
    }
  })()
}

export function off<S>(...args: S[]): AsyncIterableIterator<S> {
  const i = args.length
  let current = 0
  let value

  return {
    [Symbol.asyncIterator]() {
      current = 0
      return this
    },
    async next() {
      if (current < i) {
        value = args[current++]

        return {
          value,
        }
      }

      return {
        done: true,
        value,
      }
    },
  }
}
