
import Footer from '../components/Footer'
import Menu from '../components/Menu'

import Labogada from '../media/LH COLOR.png';
import Aeropuerto from '../media/LOGO AEROPUERTO.png';
import LDelicias from '../media/LOGO DELICIAS SF.png';
import Elemento from '../media/QUINTO ELEMENTO.png';
import UiElemento from '../media/UiElemento.png';
import Waya from '../media/WAYA-03.png';
import Tarjetas from '../media/TARJETASMK.png';
import Polo from '../media/POLO.png';
import MK from '../media/MK1.png';
import Movil from '../media/Movil.png';
import Planetas from '../media/Planetas.png';






const Portafolio = () => {
  return (
    <div>
      <Menu />

      <>

 <ul>
            <h1 className=" text-center text-white text-5xl mt-10  " >PORTAFOLIO</h1>
             <div className="d-flex justify-content-center">
               <li className=' text-center text-white bg-teal-600 md:bg-teal-600 md:py-2 md:my-5 md:ml-9 mr-6  ' >Diseño Web Logotipos Mockups</li>
               </div>
            </ul>
         

         
         
         <div className='ml-2 md:ml-20 md:grid md:grid-rows-4 md:grid-flow-col md:gap-8 sm:gap-2  '>
            <div className="h-52   md:w-80 py-10 md:ml-10  ">
               <a href="https://www.behance.net/gallery/126198439/DISENO-MARCA-LALA-GUTY"  target="_blank" rel="noopener noreferrer"> <img className="img-fluid"  src={Labogada}alt="Logoabogada" ></img></a>
            </div>
            
            <div className="h-52 md:mt-4 mt-40 md:w-80 py-10 ml-3 md:ml-10">
                <a href="https://www.infobae.com/america/mexico/2021/04/13/como-va-la-convocatoria-para-crear-el-logotipo-del-aeropuerto-felipe-angeles-que-lanzo-simon-levy/"  target="_blank" rel="noopener noreferrer"><img className="img-fluid"  src={Aeropuerto} alt="LogoAeropuerto" ></img></a>
                
             </div>
             
             <div className="h-52 md:mt-4  mt-36   md:w-80 py-10 md:ml-10">
                <a href="https://www.behance.net/gallery/122398213/MARCA-LA-DELICIA-SEVILLANA"  target="_blank" rel="noopener noreferrer"><img className="img-fluid"  src={LDelicias} alt="LogoPanaderia"></img></a>
                
             </div>
             
             <div className="h-52 md:mt-3   mt-40 md:mb-36   md:w-80 py-10 md:ml-10">
               <a href="https://www.behance.net/gallery/121154455/EL-QUINTO-ELEMENTO-SPAIDENTIDAD-VISUALDISENO-WEB"  target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={Elemento} alt="Logospa"></img></a>
                
             </div>
             <div className="h-52 mt-40 md:mt-24  md:w-80 py-10 md:ml-10">
                <a href="https://www.behance.net/gallery/121154455/EL-QUINTO-ELEMENTO-SPAIDENTIDAD-VISUALDISENO-WEB"  target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={UiElemento } alt="Ui"></img></a>
               
             </div>
             <div className="h-52 mt-10 md:mt-10  md:w-80   py-3 md:ml-10">
            <a href="https://www.behance.net/gallery/124044579/MARCA-WAYA-REPOSTERIA-ANCESTRAL" target="_blank" rel="noopener noreferrer"><img className="img-fluid"src={ Waya} alt="LogoWaya"></img></a>
                   
                </div>
             <div className="h-52 mt-40  md:mt-7  md:w-80 py-10 md:ml-10">
                <img className="img-fluid" src={Tarjetas} alt="Mockuptarjeta"></img>
                
             </div>
             <div className="h-52 mt-40 md:mt-1  md:w-80 py-10 md:ml-10">
                <img className="img-fluid" src={Polo} alt="UI Ecommerce" width="500px" height="500px" ></img>
            </div>
            
             
             <div className="h-52 mt-40 md:mt-0  md:w-80 py-10 md:ml-10">
               <a href="https://www.behance.net/gallery/128563649/Diseno-UI-Brand-TUFLIX"  target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={ MK} alt="Mockup" width="500px" height="500px" ></img></a>
                
             </div>
            
      <div className="h-52 mt-40 md:mt-0  md:w-80 py-10 md:ml-10">
          <a href="https://www.behance.net/gallery/128563649/Diseno-UI-Brand-TUFLIX" target="_blank" rel="noopener noreferrer"> <img className="img-fluid" src={Movil} alt="mockupcelular" ></img></a>
         </div>
         
         
            <div className="h-52  md:mt-32  md:w-80 mt-80 md:ml-10">
               <a href="https://www.behance.net/gallery/163075969/UXUI-Planetas " target="_blank" rel="noopener noreferrer"><img className="img-fluid" src={Planetas}alt=" Planetas" ></img></a>
             </div>
             </div>
          </>
      
      <Footer />
    </div>
      
  )
}

export default Portafolio