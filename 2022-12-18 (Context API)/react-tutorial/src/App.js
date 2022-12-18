import './App.css';
import { useContext, useState } from 'react';
import FormContext from './FormContext';
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

function App() {

  const [ isLoggedIn, setisLoggedIn] = useState(false)
  const [loginData, setloginData] = useState({
    userName:"",
    email:"",
    password:""
  })
  return <FormContext.Provider value={ {loginData, setloginData, setisLoggedIn} }>

    {!isLoggedIn ? <Login /> : <Home />}

  </FormContext.Provider>
}

export default App;
