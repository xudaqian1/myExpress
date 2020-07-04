import { Request, Response, NextFunction } from 'express'

export default class User {
  public static async getUser(_req: Request, res: Response, _next: NextFunction): Promise<any> {
    res.json({ message: "hello,world" })
  }
}