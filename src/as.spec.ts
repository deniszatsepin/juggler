import { as } from './as'
import { isAsyncIterable } from './utils'

describe('as', () => {
  it('should convert string to async iterator', async () => {
    const str = 'string'
    const iterator = as(str)

    expect(isAsyncIterable(iterator)).toBeTruthy()
    const result = await iterator[Symbol.asyncIterator]().next()
    expect(result.value).toBe(str)
  })

  it('should convert number to async iterator', async () => {
    const n = 1
    const iterator = as(n)

    expect(isAsyncIterable(iterator)).toBeTruthy()
    const result = await iterator[Symbol.asyncIterator]().next()
    expect(result.value).toBe(n)
  })

  it('should convert promise to async iterator', async () => {
    const n = 1
    const iterator = as(new Promise(resolve => setTimeout(() => resolve(n), 1)))

    expect(isAsyncIterable(iterator)).toBeTruthy()
    const result = await iterator[Symbol.asyncIterator]().next()
    expect(result.value).toBe(n)
  })

  it('should not convert async iterator', async () => {
    const iterator = (async function*() {})()
    const same = as(iterator)

    expect(same).toBe(iterator)
  })
})
