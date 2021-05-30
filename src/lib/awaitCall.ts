import util from 'util'

export function callAsync<T, U=any>(promise: Promise<T>): Promise<[U | null, T | null]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, null]>((err: U) => [err, null])
}

export function call(func: Function, ...args: any[]): Promise<any>{
  const promise = util.promisify(func).call(this, ...args)
  if(typeof promise !== "object"){
    return Promise.reject('func should match util.promisify')
  }
  const _promise = promise as Promise<any>
  return callAsync(_promise)
}

export default callAsync

