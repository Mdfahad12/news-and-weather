import React from 'react'
import './App.css'
import TempApp from './Components/TempApp'
import Navbar from './Components/Navbar'
import NewsApp from './Components/NewsApp'
import {
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom'
import Interval from './Components/Interval'
import LoginGoogle from './Components/LoginGoogle'

const App = () => {
  return (
    <div>
      
     
      <Router>
         <Navbar/>
      <Routes>
        <Route element={<TempApp/>} path='/TempApp'></Route>
        <Route element={<NewsApp/>} path='/NewsApp'></Route>
        <Route element={<Interval/>} path='/Interval'></Route>
        <Route element={<LoginGoogle/>} path='/LoginGoogle'></Route>
      </Routes>

      </Router>
    </div>
  )
}

export default App
