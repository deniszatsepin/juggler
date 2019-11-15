import { some } from './some'
import { of } from './of'
import { compose } from './compose'
import { toPromise } from './to-promise'

describe('some operator', () => {
  it('should check if at least one item in async iterator is satisfy the condition', async () => {
    const transformator = compose(some(el => el === 3))
    const result = await toPromise(transformator(of(1, 2, 3, 4, 5)))

    expect(result).toEqual(true)
  })
})
