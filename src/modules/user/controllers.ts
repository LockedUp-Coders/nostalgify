import { Request, Response } from 'express'
import logger from '../logger/winston'
import models from './models'

/**
 * @class
 * @description This class handles all operations for user module
 */
class UserOperations {
  /**
   * @static
   * @param request Express request object, passed from express router
   * @param response Express response object, passed from express router
   * @returns null
   */
  static async showProfile(request: Request, response: Response) {
    try {
      const data = await models.getUserDetails('yashkumarverma')
      response.json({ data })
    } catch (err) {
      logger.error(err)
    }
  }

  /**
   * @static
   * @param request Express request object, passed form express router
   * @param request.body JSON body containing the new details to update user profile
   * @param response Express response object, passed from express router
   * @description This controller handles requests to update a user profile
   * @returns null
   */
  static async updateProfile(request: Request, response: Response) {
    try {
      response.json({ url: request.url })
    } catch (err) {
      logger.error(err)
    }
  }
}

/** Export controller to be attached to routes */
export default UserOperations
