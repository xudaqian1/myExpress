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
    path: '/post/:id',
    method: 'GET',
    middleware: [
      authCheck,
      validate(PostValidation.getPost),
      Post.getPost
    ]
  },
  {
    path: '/post/:id',
    method: 'PUT',
    middleware: [
      authCheck,
      validate(PostValidation.updatePost),
      Post.updatePost
    ]
  },
  {
    path: '/post/:id',
    method: 'DELETE',
    middleware: [
      authCheck,
      validate(PostValidation.deletePost),
      Post.deletePost
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
  },
  {
    path: '/post/:id/like',
    method: 'POST',
    middleware: [
      authCheck,
      validate(PostValidation.likePost),
      Post.likePost
    ]
  }
]

export default routes