import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'

export default function Main() {
  return <BrowserRouter>
   <Routes>
      <Route element={<Login />} path='/login' />
      <Route element={<Home />} path='' />
      <Route element={<Register />} path='/register' />
   </Routes>
  </BrowserRouter>
}
