const {initializeDatabase} = require('./db/db.connect.js')
const Events = require('./models/events.models.js')
const Users = require('./models/users.models.js')
const fs = require('fs')

initializeDatabase()
const jsonEventData = fs.readFileSync('./events.json', 'utf-8')
const eventsData = JSON.parse(jsonEventData)
const jsonUserData = fs.readFileSync('./users.json', 'utf-8')
const usersData = JSON.parse(jsonUserData)

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
seedEventData()
