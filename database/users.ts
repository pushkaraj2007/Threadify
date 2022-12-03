import mongoose from "mongoose";
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    accountId: {
        type: String,
        required: true
    },
    profileImage: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    tweets: {
        type: Array,
        reuquired: true
    }
})

const user = mongoose.models.user || mongoose.model('user', userSchema)

export default user