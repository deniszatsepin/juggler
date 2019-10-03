export function isFunction(something: any): something is Function {
  return typeof something === 'function'
}

export function isObject(something: any): something is Object {
  return something != null && Object(something) === something
}

export function isPromise(something: any): something is PromiseLike<any> {
  return isObject(something) && isFunction(something.then)
}

export function isAsyncIterable(
  something: any
): something is AsyncIterable<any> {
  return isObject(something) && isFunction(something[Symbol.asyncIterator])
}
