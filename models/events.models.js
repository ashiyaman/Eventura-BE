const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    venue: {
        type: String
    },
    eventType: {
        type: String,
        enum: ['Online', 'Offline', 'Both'],
        required: true
    },
    category: {
        type: [String],
        enum: ['Technology', 'Arts', 'Business', 'Others']
    },

    images: [String],
    tags: [String],
    description: {
        type: String,
        required: true
    },
    isPaid: {
        type: Boolean,
        default: false
    },
    price: Number,
    numberOfAttendees: {
        type: Number,
        min: 0
    },
    dressCode: String,
    eventUrl: String,
    requiredAge: {
        type: String,
        enum: ['18 and above', '18 - 25', '25-45', 'below 60']
    },
    status: {
        type: String,
        enum: ['Upcoming', 'Live', 'Completed', 'Postponed', 'Canceled'],
        default: 'Upcoming'
    },
    capacity: {
        type: Number,
        min: 0,
        required: true
    },
    presenters: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
},
{timestamps: true})

const Events = mongoose.model('Events', eventSchema)

module.exports = Events