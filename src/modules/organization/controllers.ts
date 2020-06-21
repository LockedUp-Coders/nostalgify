import { Request, Response, response } from 'express'
import logger from '../logger/winston'
import models from './models'

/**
 * @class
 * @description This class handles all operations for user module
 */
class OrganizationOperations {
  /**
   *
   */
  static async register(request: Request, response: Response) {
    try {
      const data = await models.createNew(request.body)
      response.json(data)
    } catch (err) {
      response.json({
        error: err.error,
        message: err.message,
      })
    }
  }
  static async delete(request:Request,response:Response){
    try{
      const data =await models.deleteOrg(request.body,request)
      response.json(data)
    }
  catch(err){
    response.json({
      error:err.error,
      message:err.message
    })
  }
 }

}

/** Export controller to be attached to routes */
export default OrganizationOperations
