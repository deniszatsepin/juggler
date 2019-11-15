import { toPromise } from './to-promise'
import { of } from './of'
import { compose } from './compose'
import { collect } from './collect'
import { buffer } from './buffer'

describe('buffer operator', () => {
  it('should buffer iterator values in array', async () => {
    const transform = compose(buffer(2), collect)
    const result = await toPromise(transform(of(1, 2, 3)))

    expect(result).toEqual([[1, 2], [3]])
  })

  it('should collect all iterator values if copaicty is undefined', async () => {
    const transform = compose(buffer())
    const result = await toPromise(transform(of(1, 2, 3)))

    expect(result).toEqual([1, 2, 3])
  })

  it('should throw error if buffer copacity is not a number', () => {
    expect(() => buffer(('string' as unknown) as number)).toThrowError(
      /number or undefined/
    )
  })
})
