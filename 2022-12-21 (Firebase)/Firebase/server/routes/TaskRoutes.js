const express = require("express")
const router = express.Router()
const db = require('../Firebase')


router.get("/getTask",async(req,res)=>{
    const taskRef = db.collection('tasks')
    const snapshot = await taskRef.get()
    let arr = []
    try {
        snapshot.forEach( doc => {
            arr = [ ...arr, doc.data()]
            console.log(doc.id, "=>", doc.data())
        })
        res.status(200).send(arr)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).send(error)
    }

})

router.post("/addTask",async(req,res)=>{
    try {
        // Using Doc

        // const newTask = await db.collection("tasks").doc("task1").set({
        //     taskName: req.body.taskName,
        //     taskDesc : req.body.taskDesc
        // })

        // Using Add
        
        const newTask = await db.collection("tasks").add({
            taskName: req.body.name,
            taskDesc : req.body.desc
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