import { Request, Response, NextFunction } from 'express'
import { IUser } from '../interfaces/user'
import UserDao from '../model/dao/user'
import HttpException from '../exceptions/HttpException'
import { UNPROCESSABLE_ENTITY } from 'http-status-codes'
import Util from '../lib/utils'
import bcrypt from 'bcryptjs'

export default class User {
  public static async postRegister(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { email, password, username } = req.body


      const existUser = await UserDao.findByUsername(username)
      if (existUser) {
        return next(new HttpException(UNPROCESSABLE_ENTITY, "Username is taken"))
      }
      const hashPassword = bcrypt.hashSync(password, 10) 
      const userDoc: IUser = {
        email,
        password: hashPassword,
        username
      }
      const user = await UserDao.save(userDoc)
      const token = Util.generateToken(user._id)
      res.json({
        success: true,
        data: {
          token: token
        }
      })
    } catch (err) {
      next(err)
    }

  }

  public static async postLogin(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
      const { username, password } = req.body
      const user = await UserDao.findByUsername(username)
      if (!user) {
        return res.json({
          success: false,
          message: "User isn't exist"
        })
      }
      const match = await bcrypt.compare(password, user.password)
      if (!match) {
        return res.json({
          success: false,
          message: "Wrong password"
        })
      }
      const token = Util.generateToken(user._id)
      res.json({
        success: true,
        data:{
          token,
          user
        }
      })
    } catch (err) {
      console.log(err)
      next(err)
    }

  }
}