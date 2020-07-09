import {Joi} from 'express-validation'

export default {
  /**
   * @apiDefine user 
   */
  /**
   * @api {post} /user 获取用户设置
   * @apiGroup user
   * @apiPermission user
   * @apiParam {String} [group] 指定设置组
   * @apiSuccessExample Sucess-Response
   * HTTP/1.1 200 OK
    {
      ...
    }
   */
  createUser: {
    body: Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      username: Joi.string().required(),
    })
  }
}
