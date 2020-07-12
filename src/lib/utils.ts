
import jwt from 'jsonwebtoken'
import config from '../config'

export default class Utils {
  public static  generateToken(id:string):string {
    return jwt.sign({id: id},config.jwtSecret,{ expiresIn: '1h'})
  }
}