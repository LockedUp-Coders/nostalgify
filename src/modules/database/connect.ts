import mongoose from 'mongoose'
import logger from '../logger/winston'

class Database {
  static connect() {
    mongoose
      .connect(process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })
      .then(() => {
        logger.info('Database Connected')
      })
      .catch((err) => {
        logger.error('Database connection error')
        logger.error(err)
      })
  }
}

// pass instance of database
export default Database
