import User from '../controllers/user'
import UserValidation from '../validate/user'
import { Route } from 'src/interfaces/route'
import {validate} from 'express-validation'

const routes: Route[]=[
  {
    path: '/users/register',
    method: 'POST',
    middleware: [ 
      validate(UserValidation.postRegister), User.postRegister]
  },
  {
    path: '/users/login',
    method: 'POST',
    middleware: [ 
      validate(UserValidation.postLogin), User.postLogin]
  }
]

export default routes