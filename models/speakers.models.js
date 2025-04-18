const mongoose = require('mongoose')

const speakerSchema = new mongoose.Schema({
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

const Speakers = mongoose.model('Speaker', speakerSchema)

module.exports = Speakers