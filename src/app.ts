import express from 'express'

import bodyParser from 'body-parser'

import cors from 'cors'
import logger from './modules/logger/winston'

import authMiddleWare from './modules/auth/middleware'

import { connect } from './modules/database/mongo'
import Seed from './modules/database/validator'

// loading routes
import userRoutes from './modules/user/routes'

require('dotenv').config()

// seed collections with validations
connect(async () => {
  logger.info('Database Connected')
  await Seed()
})

// create instance of express
const app = express()

// parse valid requests only
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)
app.use(bodyParser.json())
app.use(cors())

// user interaction allowed without token headers
app.get('/', (req, res) => res.json({ error: false }))
app.use('/user', userRoutes)

// all routes next to this will require authentication
app.use('/', authMiddleWare)

// pass instance
export default app
