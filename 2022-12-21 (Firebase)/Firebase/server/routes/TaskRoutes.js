const express = require("express")
const router = express.Router()
const db = require('../Firebase')


router.get("/",async(req,res)=>{

res.send({name:"Tejas"})
})

router.post("/addTask",async(req,res)=>{
    try {
        // const newTask = await db.collection("tasks").doc("task1").set({
        //     taskName: req.body.taskName,
        //     taskDesc : req.body.taskDesc
        // })
        const newTask = await db.collection("tasks").add({
            taskName: req.body.taskName,
            taskDesc : req.body.taskDesc
        })
        res.status(200).send(newTask.id)
    } catch (error) {
        console.log("Error: ", error) 
        res.status(500).send(error)
    }


})

router.delete("/",async(req,res)=>{

})

module.exports = router;