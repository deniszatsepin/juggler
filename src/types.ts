export type Operator<T, R = T> = (
  iterator: AsyncIterable<T>
) => AsyncIterable<R | R[]>

export type Selector<S> = (
  value: S,
  index: number
) => Promise<Boolean> | Boolean
