const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDb = require('./config/db')
const router = require('./routes')

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_DOMAIN_URL,
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use('/api', router) 


const PORT = 8080 || process.env.PORT

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running")
    })
})
