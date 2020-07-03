import express, { Express, Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'
import { NOT_FOUND } from 'http-status-codes'
import HttpException from './exceptions/HttpException'
import errorMiddleware from './middlewares/error'
import bodyParser from 'body-parser'
const app: Express = express()
app.use(bodyParser)
const port: any = process.env.PORT || 8000
app.get("/", (_req: Request, res: Response) => {
  res.send("hello world")
})

app.use((_req: Request, _res: Response, next: NextFunction) => {
  const error: HttpException = new HttpException(NOT_FOUND, 'Router NotFound')
  next(error)
})
app.use(errorMiddleware)
const main = async () => {
  // db name should be edit in config file
  await mongoose.connect("mongodb://localhost:27017/tsexpress", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  app.listen(port, () => {
    console.log(`Running on http://lovalhost:${port}`)
  })
}
main()