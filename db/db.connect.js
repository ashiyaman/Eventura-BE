require('dotenv').config();

const mongoose = require("mongoose")

const mongoUri = process.env.MONGODB_URI

const initializeDatabase = async () => {
    await mongoose
    .connect(mongoUri)
    .then(() => console.log("Connected to Database"))
    .catch((error) => console.log("Error connecting to database", error))
}

module.exports = {initializeDatabase}

