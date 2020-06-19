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
      const data = await models.updateProfile(request.body)
      response.json(data)
    } catch (err) {
      logger.error(err)
      response.json(err)
    }
  }

  /**
   * @static
   * @param request Express request object, passed form express router
   * @param request.body JSON body containing the user details
   * @param response Express response object, passed from express router
   * @description This controller handles requests to register a new user
   * @returns null
   */
  static async registerUser(request: Request, response: Response) {
    try {
      const data = await models.registerUser(request.body)
      response.status(200).json(data)
    } catch (err) {
      logger.error(err)
      response.json(err)
    }
  }
}

/** Export controller to be attached to routes */
export default UserOperations
