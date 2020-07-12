import { Route } from '../interfaces/route'
import UserRoutes from './userRoutes'
import PostRoutes from './postRoutes'
// add route in constructor
export default class Routes {
  allRoute: Route[] = []

  constructor(){
    this.addRoute(UserRoutes)
    this.addRoute(PostRoutes)
  }
  addRoute(routes: Route[]){
    for(const route of routes){
      this.allRoute.push(route)
    }
  }
  getAllRoutes():Route[]{
    const routes :Route[] = this.allRoute
    return routes
  }
}