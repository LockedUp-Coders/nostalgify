import Mongoose from 'mongoose'


const {Schema} = Mongoose;

const orgSchema = new Schema({
    name:String,
    owner:{
        id:{
            type: Schema.Types.ObjectId,
            ref:"user"
        }
    }
});

export default Mongoose.model('org', orgSchema)