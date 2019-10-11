import { toPromise } from './to-promise'
import { of } from './of'
import { reduce } from './reduce'

describe('reduce operator', () => {
  it('should reduce items of async iterator', async () => {
    const reducer = reduce((acc, el) => {
      return acc + el
    }, 0)

    const result = await toPromise(reducer(of(1, 2, 3)))

    expect(result).toEqual(1 + 2 + 3)
  })
})
