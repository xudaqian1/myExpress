import User from '../controllers/user'
import UserValidation from '../validate/user'
import { Route } from 'src/interfaces/route'
import {validate} from 'express-validation'

const routes: Route[]=[
  {
    path: '/index',
    method: 'POST',
    middleware: [ 
      validate(UserValidation.createUser,{},{}), User.getUser]
  }
]

export default routes