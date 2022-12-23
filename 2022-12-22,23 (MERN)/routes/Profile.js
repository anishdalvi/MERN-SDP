const { Router } = require("express")
const verifyAuth = require("../middleware/verifyAuth")
const Users = require('../models/User-model')

const profileRouter = Router()


profileRouter.get('/', verifyAuth , (req, res) => {
    return Promise.resolve()
    .then(() => Users.findOne({email: req.email}))
    .then((data) => {
        if (!data){
            throw Error('User not Found')
        }

        data = data.toJSON()
        delete data.password

        return res.status(200).json({
            message: "Profile fetch successful",
            data
        })
    })
    .catch(error => {
        return res.status(422).json({
            message:"Profile fetch failed",
            error: error.message
        })
    })
})

module.exports = profileRouter
