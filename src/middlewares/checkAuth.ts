/*
 * @Description: 
 * @Version: 1.0
 * @Autor: xdq
 * @Date: 2021-05-30 11:39:15
 * @LastEditors: xdq
 * @LastEditTime: 2021-05-30 15:33:54
 */
import { Request, Response, NextFunction } from 'express'
import HttpException from '../exceptions/HttpException'
import {UNAUTHORIZED} from 'http-status-codes'
import jwt from 'jsonwebtoken'
import config from '../config'
import UserDao from '../model/dao/user'


const checkAuth = async(req:Request, _res: Response,next:NextFunction) =>{
  const authorizationHeader = req.headers['authorization']
  if(!authorizationHeader){
    return next(new HttpException(UNAUTHORIZED,'Authorization header must be provided'))
  }
  const token = authorizationHeader.split('Bearer ')[1]
  if(token){
    try{
      const jwtData:any = jwt.verify(token,config.jwtSecret)
      const user = await UserDao.findById(jwtData.id)
      if(user){
        req.user = user
        return next()
      }else{
        return next(new HttpException(UNAUTHORIZED,'No such user'))
      }
    }catch(err){
      return next(new HttpException(UNAUTHORIZED,'Invalid/Expired token')) 
    }
  }
  throw new Error('aaaaze')
  return next(new HttpException(UNAUTHORIZED,'Authorization token must be Bearer [token]'))
}

export default checkAuth