const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT 

const initializeDatabase = async () => {
     await mongoose
        .connect(MONGODB_URI)
        .then(() => console.log('Connected to Database'))
        .catch((error) => console.log('Error while connecting to Database.'))
}

module.exports = {initializeDatabase}

