require('dotenv').config()
const Events = require('./models/events.models.js')
const Users = require('./models/users.models.js')
const fs = require('fs')

const express = require('express')
const {initializeDatabase} = require('./db/db.connect.js')

const app = express()
app.use(express.json())

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));


initializeDatabase()
/*const jsonEventData = fs.readFileSync('./events.json', 'utf-8')
const eventsData = JSON.parse(jsonEventData)
const jsonUserData = fs.readFileSync('./users.json', 'utf-8')
const usersData = JSON.parse(jsonUserData)*/

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
                date: new Date(eventData.date),
                sessionStart: new Date(eventData.sessionStart),
                sessionEnd: new Date(eventData.sessionEnd),
                venue: 
                    {
                        name: eventData.venue.name,
                        address: eventData.venue.address,
                        city: eventData.venue.city,
                        state: eventData.venue.state,
                        country: eventData.venue.country,
                    },
                eventType: eventData.eventType,
                category: eventData.category,
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
        res.status(500).json({error: 'Failed to fetch events.'})
    }
})

//Get all events from db

const getAllUsers = async() => {
    try{
        const data = await Users.find()
        if(data){
            return data
        }
    }
    catch(error){
        throw error
    }
}

app.get('/users', async(req, res) => {
    try{
        const users = await getAllUsers()
        if(users){
            res.send(users)
        }
        else{
            res.status(400).json({error: 'No users found.'})
        }
    }
    catch{
        res.status(500).json({error: 'Failed to fetch users.'})
    }
})

const updateEventData = async(eventId, dataToUpdate) => {
    try{
        const eventData = await Events.findByIdAndUpdate(eventId, dataToUpdate, {new: true})
        if(eventData){
            return eventData
        }
    }
    catch(error){
        throw error
    }
}

app.post('/events/type/:eventId', async(req, res) => {
    try{
        const eventToUpdate = await updateEventData(req.params.eventId, req.body)
        if(eventToUpdate){
            res.status(200).json({message: 'Event updated successfully', event: eventToUpdate})
        }
        else{
            res.status(400).json({error: 'Event not found.'})
        }
    }
    catch(error){
        res.status(500).json({error: 'Failed to update event.'})
    }
})

const getEventsByType = async (type) => {
    try{
        const events = await Events.find({eventType: type})
        if(events){
            return events
        }
    }
    catch(error){
        console.log(error)
    }
}

app.get('/events/type/:eventType', async(req, res) => {
    try{
        const events = await getEventsByType(req.params.eventType)
        if(events){
            res.send(events)
        }
        else{
            res.status(400).json({error: "No events found with event type."})
        }
    }
    catch(error){
        throw error
    }
})

const PORT = process.env.PORT 
app.listen(PORT, () => {
    console.log('App running on port ', PORT)
})