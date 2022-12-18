import React, {useContext} from 'react'
import FormContext from '../FormContext'
import '../styles/Login.css'

export default function Login() {

    const {loginData, setloginData , setisLoggedIn} = useContext(FormContext)
    const {userName, email, password} = loginData

    console.log(loginData)

    // One Way of doing 

    function onChange(e){
        console.log(e.target.name + " "+ e.target.value)
        setloginData((prevLoginData) => ({
            ...prevLoginData,
           [ e.target.name]: e.target.value
        }))
    }

    function onSubmit(e) {
        setisLoggedIn(true)
        e.preventDefault()
    }

    // Other Way of Doing

    function onUserNameChange(event) {
        updateStateOnInputChange(event.target.value, "userName")
    }

    function onEmailChange(event) {
        updateStateOnInputChange(event.target.value, "email")
    }

    function onPasswordChange(event) {
        updateStateOnInputChange(event.target.value, "password")
    }

    function updateStateOnInputChange(value, type) {
        switch(type) {
            case "userName":
                setLoginData((prevLoginData) => ({
                    ...prevLoginData,
                    userName: value
                }))
            return
            case "email":
                setLoginData((prevLoginData) => ({
                    ...prevLoginData,
                    email: value
                }))
            return
            case "password":
                setLoginData((prevLoginData) => ({
                    ...prevLoginData,
                    password: value
                }))
            return
        }
    }

  return (
    <form className='loginContainer' onSubmit={onSubmit}>
        <input type="text" name='userName' placeholder='Enter Username' value={userName} onChange={onChange} required  />
        <input type="email" name='email' placeholder='Enter Email' value={email} onChange={onChange} required/>
        <input type="password" name='password' placeholder='Enter Password' value={password} onChange={onChange} required />
        <button type='submit' className="loginButton">Login</button>
    </form>
  )
}
