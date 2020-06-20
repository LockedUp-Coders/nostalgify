import Mongoose from 'mongoose'

const OrganizationSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  motto: {
    type: String,
    required: true,
  },

  createdOn: {
    type: Date,
    required: true,
  },

  members: [
    {
      type: String,
    },
  ],

  admin: {
    type: String,
  },
})

export default Mongoose.model('organization', OrganizationSchema)
