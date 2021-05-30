/*
 * @Description: 
 * @Version: 1.0
 * @Autor: xdq
 * @Date: 2020-07-12 21:28:58
 * @LastEditors: xdq
 * @LastEditTime: 2021-05-09 09:47:10
 */
import mongoose from 'mongoose'

export interface IPost{
  body: string,
  username: string,
  user: mongoose.Types.ObjectId
}
