import Mongoose from 'mongoose'

const UserSchema = new Mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: String,
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
