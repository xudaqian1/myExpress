import express, { Express } from 'express'
import morgan from 'morgan'
import { Route } from './interfaces/route'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'cookie-session'
import mongoose from 'mongoose'
import allRoute from './routes/index'
import { IConfig } from './interfaces/config'

const routes = new allRoute()

class App {
  public app: Express
  public port: number
  constructor(config: IConfig) {
    this.app = express()
    this.port = config.port
    this.initializeMiddlewares(config)
    // init mongodb
    this.connectMongo(config)
    this.initializeRoutes(routes.getAllRoutes())

  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`)
    })
  }

  private initializeMiddlewares(config: IConfig) {
    // 注册中间件
    // 日志
    this.app.use(morgan('short'))
    // body
    this.app.use(bodyParser.json())
    // cookie
    this.app.use(cookieParser('this is hinux secret'))
    // session
    this.app.use(session({
      name: config.session.key,
      secret: config.session.secret,
      maxAge: 2 * 3600 * 1000
    }))
  }

  private initializeRoutes(routes: Route[]) {
    routes.forEach((route) => {
      // 接口调用次数,权限判断（待加入）
      // const key: string = `${route.method}:${route.path}`
      switch (route.method) {
        case "GET": {
          this.app.get(route.path, route.middleware)
          break
        }
        case "POST": {
          this.app.post(route.path, route.middleware)
          break
        }
        case "PUT": {
          this.app.put(route.path, route.middleware)
          break
        }
        case "DELETE": {
          this.app.delete(route.path, route.middleware)
          break
        }
        default: {
          throw new Error(`Invalid HTTP method: ${route.method}, PATH:${route.path}`)
          break
        }
      }
    })
  }

  private connectMongo(config:IConfig){
    mongoose.connect(`mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.name}`,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`mongodb://${config.mongo.host}:${config.mongo.port}/${config.mongo.name} 已连接`)
  }


}
export default App