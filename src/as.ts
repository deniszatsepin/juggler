import { isAsyncIterable, isPromise } from './utils'

export type AsSource<S> = S | Promise<S> | AsyncIterable<S>

export function as<S>(source: AsSource<S>): AsyncIterable<S> {
  if (isAsyncIterable(source)) {
    return source
  }

  if (isPromise(source)) {
    return (async function* promiseGenerator() {
      yield await source
    })()
  }

  return (async function* promiseGenerator() {
    yield source
  })()
}
