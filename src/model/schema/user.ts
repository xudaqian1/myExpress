import {Document,Schema,model, Model} from 'mongoose'
import { IUser } from 'src/interfaces/user'

export interface IUserModel extends IUser, Document{

}

const userSchema: Schema =new Schema({
  username: String,
  email: String,
  password: String,
  createAt: String
})

const user:Model<IUserModel> = model<IUserModel>('user',userSchema)

export default user