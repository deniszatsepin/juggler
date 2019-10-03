import { as } from "./as"
import { toPromise } from "./to-promise"

describe('to-promise operator', () => {
  it('should transform iterator to promise', async () => {
    const result = await toPromise(as(1000))

    expect(result).toBe(1000)
  })
})
