import {IPost} from '../../interfaces/post'
import Post  from '../schema/post'


export default class UserDao {
  static async save(post:IPost): Promise<any>{
    return Post.create(post)
  }
   static async findPosts(): Promise<any>{
     return Post.find({}).sort({updatedAt: -1})
   }
}