require('dotenv').config()
const Events = require('./models/events.models.js')
const Users = require('./models/users.models.js')
const fs = require('fs')

const express = require('express')
const {initializeDatabase} = require('./db/db.connect.js')

initializeDatabase()
const jsonEventData = fs.readFileSync('./events.json', 'utf-8')
const eventsData = JSON.parse(jsonEventData)
const jsonUserData = fs.readFileSync('./users.json', 'utf-8')
const usersData = JSON.parse(jsonUserData)

const app = express()
app.use(express.json())

const seedUserData = () => {
    try{
        for(const userData of usersData){
            const user = Users({
                name: userData.name,
                designation: userData.designation
            })
            user.save()
        }
    }
    catch(error){
        console.log(error)
    }
}

const seedEventData = () => {
    try{
        for(const eventData of eventsData){
            const event = Events({
                title: eventData.title,
                date: eventData.date,
                venue: eventData.venue,
                type: eventData.type,
                category: eventData.venue,
                images: eventData.images,
                tags: eventData.tags,
                description: eventData.description,
                isPaid: eventData.isPaid,
                price: eventData.price,
                numberOfAttendees: eventData.numberOfAttendees,
                dressCode: eventData.dressCode,
                eventUrl: eventData.eventUrl,
                requiredAge: eventData.requiredAge,
                status: eventData.status,
                capacity: eventData.capacity,
                presenters: eventData.presenters
            })
            event.save()
        }
    }
    catch(error){
        console.log(error)
    }
   
}

//seedUserData()
//seedEventData()

app.get('/', (req, res) => {
    res.send('Welcome to Eventura, an events listing App.')
})

//Get all events from db

const getAllEvents = async() => {
    try{
        const data = await Events.find()
        if(data){
            console.log(data)
            return data
        }
    }
    catch(error){
        throw error
    }
}

app.get('/events', async(req, res) => {
    try{
        const events = await getAllEvents()
        if(events){
            res.send(events)
        }
        else{
            res.status(400).json({error: 'No events found.'})
        }
    }
    catch{
        res.status(500).json({erroe: 'Failed to fetch events.'})
    }
})

const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log('App running on port ', PORT)
})