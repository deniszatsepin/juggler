import { as } from './as'
import { toPromise } from './to-promise'
import { of } from './of'

describe('to-promise operator', () => {
  it('should transform iterator to promise', async () => {
    const result = await toPromise(as(1000))

    expect(result).toBe(1000)
  })

  it('should convert iterator to promise of the first iterator item', async () => {
    const result = await toPromise(of(1, 2, 3))

    expect(result).toBe(1)
  })
})
