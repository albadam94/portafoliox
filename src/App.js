import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Inicio from './pages/Inicio'
import Portafolio from './pages/Portafolio'

export default function App ()  {

  return (
    <Router>
      
    
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="portafolio" element={<Portafolio />} />
      <Route path="/Portafolio#inicio" element={<Inicio />} />

      

    
      
    
      

    </Routes>
    
    
    
    </Router>
  )
}


