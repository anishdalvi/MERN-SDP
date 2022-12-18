import React, {useContext} from 'react'
//import FormContext from '../FormContext'
//import '../styles/Login.css'
import '../App.css'

export default function Login() {

  //const jwt_Token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c 
 function onClick() {

  localStorage.setItem("localAuthToken : ", jwt_Token)
  
 }
   
   
  return (
    <div className='loginContainer'>
        <h1>Login Page</h1>
    </div>
  )
}
