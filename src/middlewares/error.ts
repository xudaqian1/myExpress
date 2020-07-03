import { Request, Response, NextFunction } from 'express'
import HttpHttpExecption from '../exceptions/HttpException'
import { INTERNAL_SERVER_ERROR } from 'http-status-codes'

const errorMiddleware = (error: HttpHttpExecption, _req: Request, res: Response, next: NextFunction) => {
  const status = error.status || INTERNAL_SERVER_ERROR
  const message = error.message || 'Something went wrong'
  res.status(status).json({
    success: false,
    message
  })
  next()
}

export default errorMiddleware