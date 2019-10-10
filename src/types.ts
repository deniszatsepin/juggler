export type Operator<T, R = T> = (
  iterator: AsyncIterable<T>
) => AsyncIterable<R | R[]>
