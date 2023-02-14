import React from 'react';

import Portafolio from './Pages/Portafolio';
import Menu from './Components/Menu';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Pagina1 from './Pages/Pagina1';







export default function App() {
  return (
   
   
  
  <Router>
  


      <Menu />
     
   


      <Routes>

        <Route path="/" element={<Pagina1 />} />
        <Route path="Portafolio" element={<Portafolio />} />
        <Route path="/Portafolio#inicio" element={<Pagina1 />} />


      </Routes>

      
    </Router>
     
  );
}