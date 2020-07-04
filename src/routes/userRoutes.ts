import User from '../controllers/user'
import { Route } from 'src/interfaces/route'

const routes: Route[]=[
  {
    path: '/index',
    method: 'GET',
    middleware: [User.getUser]
  }
]

export default routes