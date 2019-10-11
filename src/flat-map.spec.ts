import { toPromise } from './to-promise'
import { of } from './of'
import { flatMap } from './flat-map'
import { compose } from './compose'
import { collect } from './collect'

describe('flatMap operator', () => {
  it('should flat iterator of iterators to flat iterator', async () => {
    const transform = compose(
      flatMap(el => of(Promise.resolve(el + 1))),
      collect
    )
    const result = await toPromise(transform(of(1, 2, 3)))

    expect(result).toEqual([2, 3, 4])
  })
})
