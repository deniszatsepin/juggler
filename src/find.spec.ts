import { find } from './find'
import { of } from './of'
import { compose } from './compose'
import { toPromise } from './to-promise'

describe('find operator', () => {
  it('should find item in async iterator', async () => {
    const transformator = compose(find(el => el === 3))
    const result = await toPromise(transformator(of(1, 2, 3, 4, 5)))

    expect(result).toEqual(3)
  })
})
