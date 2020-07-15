import { Request, Response, NextFunction } from 'express'
import PostDao from '../model/dao/post'
import {IPost} from '../interfaces/post'
import HttpException from '../exceptions/HttpException'
import { NOT_FOUND,UNAUTHORIZED } from 'http-status-codes'

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

  public static async getPost(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const {id} = req.params
      const post = await PostDao.findById(id)
      if(!post){
        return next(new HttpException(NOT_FOUND,'Post not found'))
      }
      res.json({
        success: true,
        data: {post}
      })
    } catch (err) {
      next(err)
    }
  }

  public static async updatePost(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { id } = req.params
      const { body } = req.body
      const post = await PostDao.findById(id)
      if (!post) {
        return next(new HttpException(NOT_FOUND, 'Post not found'))
      }
      if (post.username!=req.user.username) {
        return next(new HttpException(UNAUTHORIZED, 'Action not allowed'))
      }
      const newPost =await PostDao.updateById(id, { body: body })
      res.json({
        success: true,
        data: { 
          newPost,
          message: 'updated successful'
         }
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

  public static async deletePost(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { id } = req.params
      const post = await PostDao.findById(id)
      if (!post) {
        return next(new HttpException(NOT_FOUND, 'Post not found'))
      }
      if (post.username!=req.user.username) {
        return next(new HttpException(UNAUTHORIZED, 'Action not allowed'))
      }
      await PostDao.deleteById(id)
      res.json({
        success: true,
        data: { 
          message: 'delete successful'
         }
      })
    } catch (err) {
      next(err)
    }

  }
  public static async likePost(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { id } = req.params
      const post = await PostDao.findById(id)

      if (!post) {
        return next(new HttpException(NOT_FOUND, 'Post not found'))
      }
      const user = req.user
      if(post.likes.find((like:any) => like.username === user.username)){
        post.likes = post.likes.filter((like:any) => like.username !== user.username)
      }else{
        post.likes.push({
          username: user.username,
          createdAt: new Date()
        });
      }
      await post.save();
      res.json({
        success: true,
        data: { 
          post
         }
      })
    } catch (err) {
      next(err)
    }

  }
}