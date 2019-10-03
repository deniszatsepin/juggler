import { map } from './map'

describe('map operator', () => {
  it('should transform items of async iterator', async () => {
    const arr = [1, 2, 3]
    const generator = async function*() {
      for (const i in arr) {
        yield Promise.resolve(arr[i])
      }
    }

    const doubled = map(async a => Promise.resolve(a * 2))(generator())

    const result = []
    for await (const item of doubled) {
      result.push(item)
    }

    expect(result).toEqual(arr.map(i => i * 2))
  })
})
