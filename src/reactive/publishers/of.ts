import { Publisher } from '../publisher'
import { Subscriber } from '../subscriber'

export function of<T>(...args: T[]): Publisher<T> {
  let _subsciber: Subscriber<T>
  let pushed: number = 0
  const total: number = args.length
  let cancelled: boolean = false

  async function request(n: number) {
    if (cancelled) return

    const requested = Math.min(n, total - pushed)
    const max = pushed + requested

    for (let i = pushed; i < max; i++) {
      pushed++
      _subsciber.onNext(args[i])
    }

    if (pushed >= total) {
      _subsciber.onComplete()
    }
  }

  function cancel() {
    cancelled = true
  }

  return {
    subscribe(subscriber: Subscriber<T>) {
      _subsciber = subscriber
      return [request, cancel]
    },
  }
}

const [request, cancel] = of(1, 2, 3).subscribe({
  onNext(e) {
    console.log(e)
  },
  onComplete() {
    console.log('complete')
  },
  onError(e) {
    console.error(e)
  },
})

request(200)
cancel()
