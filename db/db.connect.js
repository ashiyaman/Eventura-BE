require('dotenv').config()
const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI
console.log('MongoDB URI:', process.env.MONGODB_URI);

const initializeDatabase = async () => {
        console.log(MONGODB_URI)
     await mongoose
        .connect(MONGODB_URI)
        .then(() => console.log('Connected to Database'))
        .catch((error) => console.log('Error while connecting to Database.', error))
}

module.exports = {initializeDatabase}

