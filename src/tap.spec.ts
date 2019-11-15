import { tap } from './tap'
import { of } from './of'
import { compose } from './compose'
import { toPromise } from './to-promise'
import { collect } from './collect'

describe('tap operator', () => {
  it('should produce side effect', async () => {
    const side = []
    const transformator = compose(
      tap(el => side.push(el)),
      collect
    )
    const result = await toPromise(transformator(of(1, 2, 3, 4, 5)))

    expect(result).toEqual([1, 2, 3, 4, 5])
    expect(side).toEqual([1, 2, 3, 4, 5])
  })
})
