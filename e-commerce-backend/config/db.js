const mongoose = require('mongoose')

async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB connected")
    } catch (error) {
        console.log('error: ', error);
    }
}

module.exports = connectDb