import {Document,Schema, Model} from 'mongoose'
import mongoose from 'mongoose'
import { IPost } from '../../interfaces/post'


const userSchema: Schema =new Schema({
  body: {
    type: String,
    required: true
  },
  username:{
    type:String,
    required: true
  },
  user:{
    type:Schema.Types.ObjectId,
    ref:"users",
    required: true
  },
  likes:[
    {
      username:String,
      createdAt: Date
    }
  ]
}, {timestamps: true})

// mongoose.model('user')
const post:Model<IPost&Document> = mongoose.model<IPost&Document>('post',userSchema)

export default post