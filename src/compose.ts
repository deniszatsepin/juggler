import { Operator } from './types'
import { as } from './as'

export function compose<S = any>(...operators: Operator<S, any>[]) {
  return function composed(source: AsyncIterable<S>) {
    let iterator: AsyncIterable<any> = source

    for (let i = 0, steps = operators.length; i < steps; ++i) {
      iterator = as(operators[i](iterator))
    }

    return iterator
  }
}
