export async function toPromise<S>(source: AsyncIterable<S>) {
  return (await source[Symbol.asyncIterator]().next()).value
}
