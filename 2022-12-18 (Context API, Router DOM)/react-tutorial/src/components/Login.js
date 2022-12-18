import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

export default function Login(props) {

  const jwt_Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c" 
  const navigate = useNavigate()

  function onClick() {
    console.log("clicked")
    localStorage.setItem("localAuthToken", jwt_Token)
    navigate('/')
    
  }
    
   
  return (
    <div className='loginContainer'>
        <h1>Login Page <button onClick={onClick}>Login</button> </h1>

    </div>
  )
}
