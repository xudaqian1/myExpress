import { Request, Response, NextFunction } from 'express'
import PostDao from '../model/dao/post'
import {IPost} from '../interfaces/post'

export default class Post {
  public static async getPosts(_req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const posts = await PostDao.findPosts()
      res.json({
        success: true,
        data: {posts}
      })
    } catch (err) {
      next(err)
    }

  }

  public static async createPost(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const {body} = req.body
      const user = req.user
      const postDoc:IPost ={
        body: body,
        user: user!._id,
        username: user!.username
      }

      const post  =  await PostDao.save(postDoc)
      res.json({
        success: true,
        message: "created successfully",
        post
      })
    } catch (err) {
      console.log(err)
      next(err)
    }

  }
}