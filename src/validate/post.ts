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
  },
  /**
   * @api {get} /post/:id 查看评论
   * @apiGroup post
   * @apiPermission user
   * @apiParam {String} id 评论id
   * @apiSuccessExample Sucess-Response
   * HTTP/1.1 200 OK
    {
      ...
    }
   */
  getPost: {
    params: Joi.object({
      id: Joi.string().required(),
    })
  },
  /**
   * @api {put} /post/:id 更新评论
   * @apiGroup post
   * @apiPermission user
   * @apiParam {String} body 评论内容
   * @apiSuccessExample Sucess-Response
   * HTTP/1.1 200 OK
    {
      ...
    }
   */
  updatePost: {
    params: Joi.object({
      id: Joi.string().required(),
    }),
    body: Joi.object({
      body: Joi.string().required(),
    })
  },
  /**
   * @api {delete} /post/:id 更新评论
   * @apiGroup post
   * @apiPermission user
   * @apiSuccessExample Sucess-Response
   * HTTP/1.1 200 OK
    {
      ...
    }
   */
  deletePost: {
    params: Joi.object({
      id: Joi.string().required(),
    })
  },
   /**
   * @api {post} /post/:id/like 点赞评论
   * @apiGroup post
   * @apiPermission user
   * @apiSuccessExample Sucess-Response
   * HTTP/1.1 200 OK
    {
      ...
    }
   */
  likePost: {
    params: Joi.object({
      id: Joi.string().required(),
    })
  }
}
