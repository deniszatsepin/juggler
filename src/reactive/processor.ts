import { Subscriber } from './subscriber'
import { Publisher } from './publisher'

export interface Processor<T, R> extends Subscriber<T>, Publisher<R> {}
