const { Router } = require('express')
const authRouter = Router()
const Users = require('../models/User-model')
const utils = require('../utils')
//const { compare, encrypt, createAcessToken} = require('../utils')    // destructuring
const verifyAuth = require("../middleware/verifyAuth")
const { sendMail } = require('../config/mailer')

authRouter.post('/login', (req, res) => {
  return Promise.resolve()
  .then(() => {
    if (!(req.body.email && req.body.password))
    {
      throw Error('Email and Password not found')
    }
    
    return Users.findOne({ email: req.body.email})
  })
  .then((data) => {
    if (!data){
      throw Error('User not found')
    }
    
    return utils.compare(req.body.password, data.password)
  })
  .then((match) => {
    if (!match){
      throw Error('Invalid Password')
    }
   
    return res.status(200).json({
      message: 'Login Successful',
      access_token : utils.createAcessToken(req.body.email)  
    })
  })
  .catch( error => {
    return res.status(422).json({
      message: "Login Failed",
      error: error.message
    })
  })
})

authRouter.post('/register', (req, res) => {
  let resData
  return Promise.resolve()
  .then(() => {
    if (!(req.body.username && req.body.email && req.body.password))
    {
      throw Error('Username, Email and Password not found')
    }
    return utils.encrypt(req.body.password)
  })
  .then(hash => {
    req.body.password = hash
    return Users.create(req.body)
  })
  .then((data) => {
    resData = data.toJSON()
    delete resData.password

    resData.access_token = utils.createAcessToken(req.body.email)    // data object already exists
    return sendMail(resData.email, resData.username, resData.otp)
    
  })
  .then(() =>{
    delete resData.otp
    return res.status(200).json({
      message: "Registration Successful",
      data: resData
    })
  })
    .catch(error => {
      return res.status(422).json({
        message: "Registration Failed",
        error: error.message
      })
    })
  })




authRouter.post('/verify',verifyAuth, (req, res) => {
  //return Users.findOne({ email: req.email }, { otp:0})    // will only send otp field
  return Users.findOne({ email: req.email }, { otp:1})
  .then(data => {
    if (data.otp  !== req.body.otp){
      throw Error('Invalid OTP')
    }
    //return Users.findOneAndUpdate({ email: req.email }, { $set: { verified: false }})
    return Users.findOneAndUpdate({ email: req.email }, { verified: true })
  })
  .then((data) => {
    return res.status(200).json({
      message: 'Email Verified Successfully',
      data:data     // to show data 
    })
  })
  .catch(error => {
    return res.status(422).json({
      message: "Email Verification Failed",
      error: error.message
    })
  })
})

module.exports = authRouter
