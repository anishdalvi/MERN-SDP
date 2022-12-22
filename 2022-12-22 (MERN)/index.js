const express = require("express")
const app = express()
const dotenv = require('dotenv')
const logger = require('./middleware/logger')
const authRouter = require('./routes/authentication')

dotenv.config()
app.use(logger)

const PORT = process.env.PORT

app.get("/greetings" , (req,res)=>{
    //res.send("hello greetings")
    return res.status(200).json({
            message : "This is the first API GET request"
    })
})

app.use('/api/auth', authRouter)


app.listen(PORT ,(error) =>{
    if(error){
        console.log(error);
    }
    console.log("server is running on port: ", PORT);
})