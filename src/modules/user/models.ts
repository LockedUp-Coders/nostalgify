/**
 * This file contains all methods needed by user controller. The job of controller is to
 * simply combine all functions from models and generate the response. Models are the
 * actual place where the data processing happens.
 */

import { UserDetails } from './interfaces'
import logger from '../logger/winston'

/**
 * @class
 * @description This class has all functions needed by controller to perform the operations.
 * We are following the concept of thin controllers, which means that controllers will only consume
 * the functions written in this file, and act as a umbrella to perform tasks. Things like
 * database calls, file i/o, api calls, everything would be done here. Controller would combine
 * actions like these and generate a response screen.
 */
class UserModel {
  /**
   * @static
   * @description Returns the details of the passed username
   * @param username username of the user whose details are needed
   * @returns UserDetails
   */
  static async getUserDetails(username: string): Promise<UserDetails> {
    return new Promise((resolve, reject) => {
      /** if something goes wrong, send data with reject({ .... }) */
      /**   if everything is alright, send data with resolve */
      if (username === undefined) {
        reject({ error: true })
      }

      logger.info(`Loading details about user ${username}`)
      resolve({ firstname: 'yash', lastname: 'verma', username, password: 'not so easy', teams: ['disddn', 'vitvellore'] })
    })
  }
}

export default UserModel
