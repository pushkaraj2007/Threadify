import mongoose from "mongoose";
const { Schema } = mongoose

const earlyAccessSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    twitterUsername:{
        type: String,
        required: true
    }
})

const earlyAccessUser = mongoose.models.earlyAccessUser || mongoose.model('earlyAccessUser', earlyAccessSchema)

export default earlyAccessUser