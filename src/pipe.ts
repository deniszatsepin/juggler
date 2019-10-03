import { as } from './as'

export type Operator<T, R = T> = (
  iterator: AsyncIterableIterator<T>
) => AsyncIterableIterator<R>

export function pipe<S = any>(
  source: AsyncIterableIterator<S>,
  ...operators: Operator<S>[]
) {
  let iterator = source

  for (let i = 0, steps = operators.length; i < steps; ++i) {
    iterator = as(operators[i](iterator))
  }

  return iterator
}
