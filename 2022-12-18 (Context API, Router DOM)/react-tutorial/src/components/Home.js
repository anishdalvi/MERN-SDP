import '../App.css'
import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  
  const isLoggedIn = localStorage.getItem("localAuthToken")
  const navigate = useNavigate()

  useEffect(() => {
    if(!isLoggedIn){
      navigate("/login")
    }
  }, [])

  return (
    isLoggedIn ? <div className='homeContainer'>
    <h1>Home Page</h1>
 </div> : null
  )
}
