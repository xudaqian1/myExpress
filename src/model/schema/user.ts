import {Document,Schema,model, Model} from 'mongoose'
import { IUser } from 'src/interfaces/user'


const userSchema: Schema =new Schema({
  username: String,
  email: String,
  password: String,
  createAt: {
    type: Date,
    default: Date.now
  }
})

// mongoose.model('user')
const user:Model<IUser&Document> = model<IUser&Document>('user',userSchema)

export default user