import React from   'react';


import Labogada from '../Media/LH COLOR.png';
import Aeropuerto from '../Media/LOGO AEROPUERTO.png';
import LDelicias from '../Media/LOGO DELICIAS SF.png';
import UI from '../Media/UI.png';
import Elemento from '../Media/QUINTO ELEMENTO.png';
import UiElemento from '../Media/UiElemento.png';
import Waya from '../Media/WAYA-03.png';
import Tarjetas from '../Media/TARJETASMK.png';
import Polo from '../Media/POLO.png';
import MK from '../Media/MK1.png';
import Movil from '../Media/Movil.png';
import Clinica from '../Media/Clinicaveterinaria.png';







function Portafolio(){
    return(
       
         <div >
            
     

        
        
      
           
       
            <div className="portfolio-menu mt-2 mb-4">
           
           <br></br>
            <ul>
            <h1 className="text-center portafolio" id="Portafolio">PORTAFOLIO</h1>
             <div className="d-flex justify-content-center">
               <li className="btn btn-outline-info " data-filter=".web">Diseño Web</li>
               <li className="btn btn-outline-info " data-filter=".logos">Logotipos</li>
               <li className="btn btn-outline-info" data-filter=".mockups">Mockups</li>
               </div>
            </ul>
         </div>

<div className="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0"> <a href="https://www.behance.net/gallery/126198439/DISENO-MARCA-LALA-GUTY"  target="_blank" rel="noopener noreferrer">
    <img 
      src={Labogada}
      className="img-fluid logos w-100 shadow-1-strong rounded mb-4 "
      alt="LogoLaura"
    /></a>
<a href="https://www.infobae.com/america/mexico/2021/04/13/como-va-la-convocatoria-para-crear-el-logotipo-del-aeropuerto-felipe-angeles-que-lanzo-simon-levy/"  target="_blank" rel="noopener noreferrer">
    <img
      src={Aeropuerto}
      class="img-fluid w-100 shadow-1-strong rounded mb-4"
      alt="LogoAeropuerto"
    /></a>
      <a href="https://www.behance.net/gallery/124044579/MARCA-WAYA-REPOSTERIA-ANCESTRAL" target="_blank" rel="noopener noreferrer">
     <img
      src={Waya}
      className="img-fluid w-100 shadow-1-strong rounded mb-4"
      alt="LogoWaya"
    /></a>
     <img
      src={Polo}
      className="img-fluid w-100 shadow-1-strong rounded mb-4"
      alt="Mockup"
    />
    <a href="https://clinicamishuellitas.netlify.app " target="_blank" rel="noopener noreferrer">
        <img
      src={Clinica}
      className="img-fluid w-100 shadow-1-strong rounded mb-4"
      alt="Diseñoweb"
    /></a>
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src={UI}
      className="img-fluid w-100 shadow-1-strong rounded mb-4"
      alt="Diseñoweb"
    />
  
  <a href="https://www.behance.net/gallery/122398213/MARCA-LA-DELICIA-SEVILLANA"  target="_blank" rel="noopener noreferrer">
    <img
      src={LDelicias}
      className="img-fluid w-100 shadow-1-strong rounded mb-4"
      alt="Diseñoweb"
    /></a>
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
  <a href="https://www.behance.net/gallery/121154455/EL-QUINTO-ELEMENTO-SPAIDENTIDAD-VISUALDISENO-WEB"  target="_blank" rel="noopener noreferrer">
    <img
      src={Elemento}
      className="img-fluid w-80 shadow-1-strong rounded mb-4"
      alt="Mockup"
    /></a>
     <a href="https://www.behance.net/gallery/128563649/Diseno-UI-Brand-TUFLIX"  target="_blank" rel="noopener noreferrer">
 <img
      src={MK}
      className="img-fluid w-80 shadow-1-strong rounded mb-4"
      alt="Mockup"
    /></a>
    <a href="https://www.behance.net/gallery/121154455/EL-QUINTO-ELEMENTO-SPAIDENTIDAD-VISUALDISENO-WEB"  target="_blank" rel="noopener noreferrer">
    <img
      src={UiElemento}
      className="img-fluid w-100 shadow-1-strong rounded mb-4"
      alt="Diseñoweb"
    /></a>
     <img
      src={Tarjetas}
      className="img-fluid w-100 shadow-1-strong rounded mb-4"
      alt="Tarjetas"
    />
     <a href="https://www.behance.net/gallery/128563649/Diseno-UI-Brand-TUFLIX" target="_blank" rel="noopener noreferrer"> 
     <img 
      src={Movil}
      className="img-fluid w-100 shadow-1-strong rounded mb-4"
      alt="Prototipo"
    /></a>
   
  </div>
  
</div>






      
    
</div>

    )
}       



export default Portafolio;