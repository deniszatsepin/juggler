import { map } from './map'
import { of } from './of'

describe('map operator', () => {
  it('should transform items of async iterator', async () => {
    const doubled = map(async a => Promise.resolve(a * 2))(of(1, 2, 3))

    const result = []
    for await (const item of doubled) {
      result.push(item)
    }

    expect(result).toEqual([2, 4, 6])
  })
})
