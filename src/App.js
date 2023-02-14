import React from 'react'
import { BrowserRouter as  Router,Route, Routes} from 'react-router-dom'
import Portafolio from './pages/Portafolio'
import Error from './components/Error'


import Inicio from './pages/Inicio'

import Menu from './components/Menu'

export default function App ()  {
  
  return (
    <Router>
     
    <Menu />
    
    <Routes>
      <Route  exact path="/" element={<Inicio/>} />
      <Route  exact path="/portafolio" element={<Portafolio/>} />
      <Route path="*"  element={<Error/>} />
      
       

    </Routes>
    
    
    
    </Router>
  );
}


