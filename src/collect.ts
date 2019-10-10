export function collect<S>(source: AsyncIterable<S>): AsyncIterable<S[]> {
  return (async function* generator() {
    const buffer = []
    for await (const item of source) {
      buffer.push(item)
    }
    yield buffer
  })()
}
