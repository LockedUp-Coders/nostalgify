import mongoose from 'mongoose'
import logger from '../logger/winston'

// port number is compulsary in mongoose connectionString
const connectionString: string =
  process.env.connection_string || 'mongodb://127.0.0.1:27017/'

// eslint-disable-next-line
let mongodb: any
let dbName:string = "nostalgify"

function connect(callback: any) {
  mongodb = mongoose.connect(connectionString + dbName,
              { useNewUrlParser: true, useUnifiedTopology: true}, 
              function(error) {
                logger.error('Error Connecting to database');
                return null;
              });
  callback()
}

function close() {
  mongodb.close()
}

export { connect, close, mongodb as db }
