
import Footer from '../components/Footer'

import Movil from '../media/Movil.png';
import Afro from '../media/Afroproyectos.png';
import Labogada from '../media/LH COLOR.png';
import Aeropuerto from '../media/LOGO AEROPUERTO.png';
import Elemento from '../media/QUINTO ELEMENTO.png';
import Waya from '../media/WAYA-03.png';
import MK from '../media/MK1.png';
import Planetas from '../media/Planetas.png';
import ScrollButton from '../components/ScrollButton';






const Portafolio = () => {
  return (
    <div>
     

      <>

 <ul>
            <h1 className=" text-center text-white text-5xl mt-10  " >PORTAFOLIO</h1>
             <div className="d-flex justify-content-center">
               <li className=' text-center text-white bg-teal-600 md:bg-teal-600 md:py-2 md:my-5 md:ml-9 mr-6  ' >Marcas-Diseño Web-Desarrollo Web</li>
               </div>
            </ul>
         

         
         
     
            
             <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
      <a href="https://www.behance.net/gallery/126198439/DISENO-MARCA-LALA-GUTY"  target="_blank" rel="noopener noreferrer"> 
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={Labogada} />
          </a>
      </div>
   
      <div class="w-1/2 p-1 md:p-2">
      <a href="https://www.infobae.com/america/mexico/2021/04/13/como-va-la-convocatoria-para-crear-el-logotipo-del-aeropuerto-felipe-angeles-que-lanzo-simon-levy/" target="_blank" rel="noopener noreferrer" >
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={Aeropuerto} /></a>
      </div>
      <div class="w-full p-1 md:p-2">
      <a href="https://www.behance.net/gallery/128563649/Diseno-UI-Brand-TUFLIX"  target="_blank" rel="noopener noreferrer" >
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={Movil}/></a>
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
      <a href="https://www.behance.net/gallery/171112919/DonarAPP"  target="_blank" rel="noopener noreferrer" > 
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={ MK} /> </a>
      </div>
      <div class="w-1/2 p-1 md:p-2">
      <a href="https://www.behance.net/gallery/121154455/EL-QUINTO-ELEMENTO-SPAIDENTIDAD-VISUALDISENO-WEB"  target="_blank" rel="noopener noreferrer">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={Elemento} /> </a>
      </div>
      <div class="w-1/2 p-1 md:p-2">
      <a href="https://www.behance.net/gallery/124044579/MARCA-WAYA-REPOSTERIA-ANCESTRAL"  target="_blank" rel="noopener noreferrer">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={ Waya} /></a>
      </div>
      <div class="w-1/2 p-1 md:p-2">
      <a href="https://afroproyectos.com/"  target="_blank" rel="noopener noreferrer"> 
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center bg-white"
          src={Afro} />
          </a>
      </div>
      <div class="w-1/2 p-1 md:p-2">
      <a href="https://www.behance.net/gallery/163075969/UXUI-Planetas"  target="_blank" rel="noopener noreferrer"> 
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center bg-white"
          src={Planetas} />
          </a>
      </div>
    </div>
  </div>
</div>
          </>
          <ScrollButton/>
      <Footer />
    </div>
      
  )
}

export default Portafolio