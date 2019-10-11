import { filter } from './filter'
import { of } from './of'
import { compose } from './compose'
import { collect } from './collect'
import { toPromise } from './to-promise'

describe('filter operator', () => {
  it('should filter items of async iterator', async () => {
    const transformator = compose(
      filter(el => el % 2 === 1),
      collect
    )
    const result = await toPromise(transformator(of(1, 2, 3, 4, 5)))

    expect(result).toEqual([1, 3, 5])
  })
})
