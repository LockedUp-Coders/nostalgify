import Mongoose from 'mongoose'

const UserSchema = new Mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: String,
  username: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  teams: [
    {
      type: String,
    },
  ],
})

export default Mongoose.model('user', UserSchema)
