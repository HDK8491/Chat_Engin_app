import React from 'react'
import './App.css'
import Register from './Components/Register/Register'

import {BrowserRouter,Routes,Route} from "react-router-dom"; 
import HomePage from './Components/HomePage/HomePage';

const App = () => {
  return (
    <div>
    
    {/* <Register/> */}

    <BrowserRouter> 
      <Routes> 
        <Route  path="/" element={<Register/>}/> 
        <Route  path="/home" element={<HomePage/>}/> 
      </Routes> 
      </BrowserRouter> 
    </div>
  )
}

export default App
