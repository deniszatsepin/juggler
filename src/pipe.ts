import { Operator } from './types'
import { as } from './as'

export function pipe<S = any>(
  source: AsyncIterable<S>,
  ...operators: Operator<S, any>[]
) {
  let iterator: AsyncIterable<any> = source

  for (let i = 0, steps = operators.length; i < steps; ++i) {
    iterator = as(operators[i](iterator))
  }

  return iterator
}
