export type Operator<T, R = T> = (
  iterator: AsyncIterable<T>
) => AsyncIterable<R | R[]>

export type Selector<S> = (
  value: S,
  index: number
) => Promise<Boolean> | Boolean

export type SideEffect<S> = (value: S, index: number) => Promise<S> | S
