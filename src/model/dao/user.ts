/*
 * @Description: 
 * @Version: 1.0
 * @Autor: xdq
 * @Date: 2020-07-05 20:09:43
 * @LastEditors: xdq
 * @LastEditTime: 2021-05-09 09:29:08
 */
import {IUser} from '../../interfaces/user'
import User from '../schema/user'


export default class UserDao {
  static async save(user:IUser): Promise<any>{
    return User.create(user)
  }
   static async findByUsername(username:string): Promise<any>{
     return User.findOne({username: username})
   }
   
   static async findById(id:string): Promise<any>{
     return User.findById(id)
   }

   static async  list(limit: number, skip: number):Promise<any>{
     return User.find({}).limit(limit).skip(skip).exec() 
   }
}