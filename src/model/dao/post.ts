import {IPost} from '../../interfaces/post'
import Post  from '../schema/post'

export default class UserDao {
  static async save(post: IPost): Promise<any> {
    return Post.create(post)
  }
  static async findPosts(): Promise<any> {
    return Post.find({}).sort({ updatedAt: -1 })
  }

  static async findById(id: string): Promise<any> {
    return Post.findById(id)
  }

  static async updateById(id: string, updateDoc: object): Promise<any> {
    return Post.findByIdAndUpdate(id, updateDoc,{new: true})
  }

  static async deleteById(id: string): Promise<any> {
    return Post.findByIdAndDelete(id)
  }
}