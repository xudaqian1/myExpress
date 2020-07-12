import {Joi} from 'express-validation'

export default {
  /**
   * @apiDefine user 
   */
  /**
   * @api {post} /users/register 获取用户设置
   * @apiGroup user
   * @apiPermission user
   * @apiParam {String} email 邮箱
   * @apiParam {String} password 密码
   * @apiParam {String} username 用户名 
   * @apiSuccessExample Sucess-Response
   * HTTP/1.1 200 OK
    {
      ...
    }
   */
  postRegister: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      username: Joi.string().required(),
    })
  },
  /**
   * @apiDefine user 
   */
  /**
   * @api {post} /users/register 获取用户设置
   * @apiGroup user
   * @apiPermission user
   * @apiParam {String} password 密码
   * @apiParam {String} username 用户名 
   * @apiSuccessExample Sucess-Response
   * HTTP/1.1 200 OK
    {
      ...
    }
   */
  postLogin: {
    body: Joi.object({
      password: Joi.string().required(),
      username: Joi.string().required(),
    })
  }
}
