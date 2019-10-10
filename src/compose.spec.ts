import { toPromise } from './to-promise'
import { compose } from './compose'
import { of } from './of'
import { collect } from './collect'
import { map } from './map'

describe('compose operator', () => {
  it('should compose operators in one conveyor', async () => {
    const conveyor = compose(
      map(el => el * 2),
      collect
    )

    const result = await toPromise(conveyor(of(1, 2, 3)))

    expect(result).toEqual([2, 4, 6])
  })
})
