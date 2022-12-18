import './App.css';
import { useContext, useState } from 'react';
import FormContext from './FormContext';
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Main from './Main';

function App() {

  // const [ isLoggedIn, setisLoggedIn] = useState(false)
  // const [loginData, setloginData] = useState({
  //   userName:"",
  //   email:"",
  //   password:""
  // })

  return <>
  
  <Main />
  </>
}

export default App;
