import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/Login'


function App() {
  
  const [todos, setTodos]=useState([])


  useEffect(()=>{
    const resp = axios.get("http://localhost:3000/task/getTask").then(res=>res.data).then(res=>setTodos(res))
  },[])
  
  return (
      <Router>
      <Routes>
      <Route exact path ="/" element = {<Home todos={todos}/>}/>
      <Route path="login" element={<Login/>}/>
     
      </Routes>
      </Router>
  )
}

export default App
