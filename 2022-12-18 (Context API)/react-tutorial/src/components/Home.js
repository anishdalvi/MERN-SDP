import React, {useContext} from 'react'
import FormContext from '../FormContext'

export default function Home() {
    const {loginData} = useContext(FormContext)
    const {userName, email, password} = loginData

  return (
    <div className='homeContainer'>
        <h3>Name : {userName}</h3>
        <h3>Email : {email}</h3>
        <h3>Password: {password}</h3>
    </div>
  )
}
