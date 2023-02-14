import React from 'react'
import { BrowserRouter as  Router,Route, Routes} from 'react-router-dom'
import Portafolio from './pages/Portafolio'

import Inicio from './pages/Inicio'

import Menu from './components/Menu'

export default function App ()  {
  
  return (
    <Router>
     
    <Menu />
    
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/portafolio" element={<Portafolio />} />
      
       

    </Routes>
    
    
    
    </Router>
  );
}


