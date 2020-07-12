import Post from '../controllers/post'
import { Route } from '../interfaces/route'
import { validate } from 'express-validation'
import PostValidation from '../validate/post'
import authCheck from '../middlewares/checkAuth'
const routes: Route[] = [
  {
    path: '/post',
    method: 'GET',
    middleware: [
      authCheck,
      Post.getPosts
    ]
  },
  {
    path: '/post',
    method: 'POST',
    middleware: [
      authCheck,
      validate(PostValidation.createPost),
      Post.createPost
    ]
  }
]

export default routes