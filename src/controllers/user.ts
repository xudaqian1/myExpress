import { Request, Response, NextFunction } from 'express'
import {IUser} from '../interfaces/user'
import UserDao from '../model/dao/user'
export default class User {
  public static async getUser(req: Request, res: Response, _next: NextFunction): Promise<any> {
    const { email, password, username } = req.body
    
    const user:IUser={
      email,
      password,
      username
    }
    await UserDao.save(user)
    res.json({ message: "hello,world" })
  }
}