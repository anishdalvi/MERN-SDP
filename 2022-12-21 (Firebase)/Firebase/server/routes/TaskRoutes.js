const express = require("express")
const router = express.Router()


router.get("/",async(req,res)=>{

res.send({name:"Tejas"})
})

router.post("/",async(req,res)=>{



})

router.delete("/",async(req,res)=>{

})

module.exports = router;