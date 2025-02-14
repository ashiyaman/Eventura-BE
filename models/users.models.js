const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    }
    },
    {timestamps: true}
)

const Users = mongoose.model('User', userSchema)

module.exports = Users