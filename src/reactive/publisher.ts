import { Subscriber } from './subscriber'
import { Subscription } from './subscription'

export interface Publisher<T> {
  subscribe(subscriber: Subscriber<T>): Subscription
}
