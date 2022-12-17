const express = require("express")
const mongoose = require("mongoose")
const Todo = require("./models/todo-model")
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/newDB", (error) =>{
    if (error) {
        console.log("Error: ", error)
    }
    console.log("Connection Established Sucessfully")
})
const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.get("/greetings", (req, res) =>{
    res.status(201).send("Hello World")
})

app.get("/todos", (req, res) =>{
    return Todo.find()
        .then(data => {
            res.status(200).json({
                todo: data
            })
        })
        .catch(error =>{
            res.status(422).json({
                error:error.toString()
            })
        })

    
})

app.post("/todos", (req, res) =>{

    const newTodo = req.body

    return Promise.resolve()
        .then(() => {
            if(!newTodo.title)
                throw Error("Title from Throw Error")
            
            return Todo.create(newTodo)
        })
        .then(data =>{
            res.status(201).json({
                message : "Todo Created",
                todo : data
            })
        })
        .catch(error =>{
            res.status(422).json({
                error: error.toString()
            })
        })

})


app.listen(8000, ()=> {
    console.log("Server Running on Port 8000")
})