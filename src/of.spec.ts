import of from './of'

describe('of operator', () => {
  it('should create async iterator from parameters', async () => {
    const items = [1, 2, 3]
    const asyncIterator = of(...items)
    const result: number[] = []

    for await (const el of asyncIterator) {
      result.push(el)
    }

    expect(result).toEqual(items)
  })

  it('should create async iterator from promises', async () => {
    const items = [1, 2, 3]
    const asyncIterator = of<number>(
      ...items.map(item => Promise.resolve(item))
    )
    const result: number[] = []

    for await (const el of asyncIterator) {
      result.push(el)
    }

    expect(result).toEqual(items)
  })
})
