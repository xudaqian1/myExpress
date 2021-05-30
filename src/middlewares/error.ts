/*
 * @Description: 错误处理中间件
 * @Version: 1.0
 * @Autor: xdq
 * @Date: 2020-07-02 22:40:17
 * @LastEditors: xdq
 * @LastEditTime: 2021-05-30 15:35:52
 */
import { Request, Response, NextFunction } from 'express'
import HttpHttpExecption from '../exceptions/HttpException'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'
import {ValidationError} from 'express-validation'

const errorMiddleware = (error: HttpHttpExecption, _req: Request, res: Response, _next: NextFunction) => {
  if(error instanceof ValidationError){
    return res.status(error.statusCode).json({
      success: false,
      message: error.details
    })
  }
  const status = error.status || INTERNAL_SERVER_ERROR
  const message = error.message || 'Something went wrong'
  return res.status(status).json({
    success: false,
    message
  })

}

export default errorMiddleware