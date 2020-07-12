import {Document,Schema,model, Model} from 'mongoose'
import { IUser } from '../../interfaces/user'


const userSchema: Schema =new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role:{
    type:String,
    enum: ['admin','basic'],
    default: 'basic'
  }
}, {timestamps: true})

// mongoose.model('user')
const user:Model<IUser&Document> = model<IUser&Document>('user',userSchema)

export default user