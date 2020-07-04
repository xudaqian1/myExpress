import express, { Express} from 'express'

import { Route } from './interfaces/route'

class App {
  public app: Express
  public port: number
  constructor(routes: Route[], port: number) {
    this.app = express()
    this.port = port
    this.initializeMiddlewares()
    this.initializeRoutes(routes)

  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`)
    })
  }

  private initializeMiddlewares() {

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
  

}
export default App