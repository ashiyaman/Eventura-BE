const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    profileImg: String
    },
    {timestamps: true}
)

const Users = mongoose.model('User', userSchema)

module.exports = Users