import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Menu from './components/Menu'
import Inicio from './pages/Inicio'

export default function App ()  {
  return (
    <Router>
      <Menu />
    
    <Routes>
      <Route path="/" element={<Inicio/>} />
    
      

    </Routes>
    
    
    
    </Router>
  )
}


