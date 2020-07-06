import { Request, Response, NextFunction } from 'express'
import {IUser} from '../interfaces/user'
import UserDao from '../model/dao/user'
export default class User {
  public static async getUser(_req: Request, res: Response, _next: NextFunction): Promise<any> {
    const user:IUser={
      email: '123@qq.com',
      password: 'xxxx',
      username: 'hinux'
    }
    await UserDao.save(user)
    res.json({ message: "hello,world" })
  }
}