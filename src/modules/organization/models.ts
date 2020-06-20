import logger from '../logger/winston'
import { organizationDatatype } from './interfaces'
import Organization from './schema'

interface returnDataType {
  error: Boolean
  message: String
  payload: any
}

class UserModel {
  /**
   *
   * @param user user object
   */
  static async createNew(organization: organizationDatatype): Promise<returnDataType> {
    return new Promise((resolve, reject) => {
      /**
       * user sends incomplete data
       */
      if (!organization || !organization.name || !organization.motto) {
        reject({
          error: true,
          message: 'incomplete data',
        })
      }

      /**
       * user sends valid data
       */
      const newOrganizationObject = new Organization({
        name: organization.name,
        motto: organization.motto,
        createdOn: Date.now(),
        members: ['yashkumarverma'],
        admin: 'yashkumarverma',
      })

      newOrganizationObject
        .save()
        .then((doc) => {
          logger.info('Entey created')
          resolve({
            error: false,
            message: 'created successfully',
            payload: doc,
          })
        })
        .catch((err) => {
          console.log(err)
          logger.error('Database Error')
          reject({
            error: true,
            message: 'database error',
          })
        })
    })
  }
}

export default UserModel
