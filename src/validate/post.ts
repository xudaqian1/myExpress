import {Joi} from 'express-validation'

export default {
  /**
   * @apiDefine post 
   */
  /**
   * @api {post} /posts 发表评论
   * @apiGroup post
   * @apiPermission user
   * @apiParam {String} body 提交评论内容
   * @apiSuccessExample Sucess-Response
   * HTTP/1.1 200 OK
    {
      ...
    }
   */
  createPost: {
    body: Joi.object({
      body: Joi.string().required(),
    })
  }
}
