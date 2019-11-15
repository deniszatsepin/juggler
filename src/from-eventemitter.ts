import { EventEmitter } from 'events'

interface AsyncResolver<T> {
  resolve: (value?: T | PromiseLike<T> | undefined) => void
  reject: (reason?: any) => void
}

export async function* eventGenerator<T>(
  emitter: EventEmitter,
  eventName: string,
  copacity?: number
): AsyncGenerator {
  const buffer: T[] = []
  const promises: AsyncResolver<T>[] = []

  emitter.on(eventName, (...args) => {
    const payload = (args as unknown) as T

    if (promises.length) {
      const { resolve } = promises.shift()
      resolve(payload)
    } else {
      if (buffer.length <= copacity) {
        buffer.push(payload)
      }
    }
  })

  while (true) {
    const val = await new Promise((resolve, reject) => {
      if (buffer.length) {
        resolve(buffer.shift())
      } else {
        promises.push({ resolve, reject })
      }
    })

    yield val
  }
}
