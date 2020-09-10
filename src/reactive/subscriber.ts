import { Subscription } from './subscription'

export interface Subscriber<T> {
  onNext(item: T): void

  onError(error: Error): void

  onComplete(): void
}
