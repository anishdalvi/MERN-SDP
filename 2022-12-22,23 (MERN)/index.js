const express = require('express')
const dotenv = require('dotenv')
const logger = require('./middleware/logger')
const authRouter = require('./routes/authentication')
const profileRouter = require('./routes/Profile')
const connectDB = require('./config/db')


const app = express()
dotenv.config()
connectDB()

app.use(express.json())     // for json objects
app.use(express.urlencoded({ extended: true}))    // for forms

app.use(logger)

const PORT = process.env.PORT

app.get('/greetings', (req, res) => {
  // res.send("hello greetings")
  return res.status(200).json({
    message: 'This is the first API GET request'
  })
})

app.use('/api/auth', authRouter)
app.use('/api/profile', profileRouter)

app.listen(PORT, (error) => {
  if (error) {
    console.log(error)
  }
  console.log('server is running on port: ', PORT)
})
