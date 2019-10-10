import { toPromise } from './to-promise'
import { pipe } from './pipe'
import { of } from './of'
import { collect } from './collect'

describe('collect operator', () => {
  it('should collect items from iterator into array', async () => {
    const result = await toPromise(
      pipe(
        of(1, 2, 3),
        collect
      )
    )

    expect(result).toEqual([1, 2, 3])
  })
})
