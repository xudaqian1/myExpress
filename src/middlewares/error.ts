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