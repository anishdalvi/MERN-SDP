const mongoose = require('mongoose')
//const MONGO_URI = process.env.MONGO_URI

//console.log()

module.exports = () => {
    mongoose.set('strictQuery', true)   // suppressed warning
    mongoose.connect("mongodb://0.0.0.0:27017/mern_sdp", (error) => {
        if(error){
            console.log("Mongo Error: ", error);
            throw error
        }
        console.log("Database Connected Successfully");
    })
}