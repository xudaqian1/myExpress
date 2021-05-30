/*
 * @Description: 处理异步异常相关方法
 * @Version: 1.0
 * @Autor: xdq
 * @Date: 2020-11-07 19:46:20
 * @LastEditors: xdq
 * @LastEditTime: 2021-05-30 15:36:43
 */
import util from 'util'
import { Request, Response, NextFunction } from 'express'

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
/**
 * @description: 全局加入try/catch来捕获异常
 * @param {Function} handler
 * @return {*}
 */
export function asyncTryCatch(handler: Function) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next)
    } catch (err) {
      console.log(err)
     return next(new Error(err))
    }
  }
}

export default callAsync

