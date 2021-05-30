/*
 * @Description: test
 * @Version: 1.0
 * @Autor: xdq
 * @Date: 2020-07-12 18:45:32
 * @LastEditors: xdq
 * @LastEditTime: 2021-05-08 23:13:39
 */


import jwt from 'jsonwebtoken'
import config from '../config'

export default class Utils {
  /**
   * @description: 
   * @param {string} id
   * @return {*}
   */
  public static generateToken(id: string): string {
    return jwt.sign({ id: id }, config.jwtSecret, { expiresIn: '1h' })

  }
  
  public static generateRandom(start: number, end:number, fixed=0){
    let differ = end - start
    let random = Math.random()
    return (start + differ * random).toFixed(fixed)   
  }
}
