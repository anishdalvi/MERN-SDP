const { Router } = require('express')
const authRouter = Router()
const Users = require('../models/User-model')

authRouter.post('/login', (req, res) => {
  return res.status(200).json({
    message: 'Login Successful'
  })
})

authRouter.post('/register', (req, res) => {
  return Promise.resolve()
  .then(() => {
    if (!(req.body.username && req.body.email && req.body.password))
    {
      throw Error('Username, Email and Password not found')
    }
    return Users.create(req.body)
  })
  .then((data) => {
    data = data.toJSON()
    delete data.password

    return res.status(200).json({
      message: "Registration Successful",
      data: data
    })
  })
    .catch(error => {
      return res.status(422).json({
        message: "Registration Failed",
        error: error.message
      })
    })
  })




authRouter.post('/verify_email', (req, res) => {
  return res.status(200).json({
    message: 'Email Verified Successfully'
  })
})

module.exports = authRouter
