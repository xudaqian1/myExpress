import {IUser} from '../../interfaces/user'
import User from '../schema/user'


export default class UserDao {
  static async save(user:IUser): Promise<any>{
    return User.create(user)
  }
}