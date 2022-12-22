const { Router } = require('express')
const authRouter = Router()

authRouter.post('/login', (req, res) => {
  return res.status(200).json({
    message: 'Login Successful'
  })
})

authRouter.post('/register', (req, res) => {
  return res.status(200).json({
    message: 'Registration Successful'
  })
})

authRouter.post('/verify_email', (req, res) => {
  return res.status(200).json({
    message: 'Email Verified Successfully'
  })
})

module.exports = authRouter
