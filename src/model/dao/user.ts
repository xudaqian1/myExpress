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
}