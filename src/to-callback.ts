import { pipe } from './pipe'
import { of } from './of'

// TODO: refactor it
export function toCallbackFactory<S>(source: AsyncIterable<S>) {
  return function (...args: any[]) {
    const callback = args[args.length - 1]
    const restArgs = args.slice(0, args.length - 1)

    pipe(of(restArgs), source)
    source[Symbol.asyncIterator]()
      .next()
      .then((result) => {
        callback(null, result)
      })
      .catch((error) => {
        callback(error)
      })
  }
}
