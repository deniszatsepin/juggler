import { OfSource, of } from './of'

export type AsSource<S> = OfSource<S> | AsyncIterableIterator<S>

export function isAsyncIterable(x: any) {
  return x != null && typeof x[Symbol.asyncIterator] === 'function'
}

export function as<S>(source: AsSource<S>): AsyncIterableIterator<S> {
  if (isAsyncIterable(source)) {
    return source as AsyncIterableIterator<S>
  }

  return of(source as OfSource<S>)
}
