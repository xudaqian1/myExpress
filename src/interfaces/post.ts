import mongoose from 'mongoose'

export interface IPost{
  body: string,
  username: string,
  user: mongoose.Types.ObjectId
}