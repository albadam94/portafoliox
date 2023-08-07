import React from 'react'
import 'animate.css';
import Footer from '../components/Footer'
import Foto from '../images/Perfil.png'
import Facebook from '../Icons/Facebook.svg'
import Instagram from '../Icons/Instagram.svg'
import Twitter from '../Icons/twitter.svg'
import Behance from '../Icons/Behance.svg'
import Github  from '../Icons/Git.svg'
import Linkedin from '../Icons/linkedin.svg'
import Slider from '../components/Slider'
import ScrollButton from '../components/ScrollButton';




import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



function Inicio ()  {
    
  return (


<div>

<h3 className=' lg:ml-24 ml-12 sm:ml-24 text-teal-400 text-lg font-medium mt-10' >Hola me llamo</h3>
<br></br>
<h1 className='   text-gray-200 lg:text-7xl md:flex-1 ml-12 lg:ml-24 lg:text-[80px] font-bold'>BRAYAN ALBADAM</h1>
<h1 className='animate__slideInUp md:h-auto md:w-30 text-gray-200 lg:text-7xl md:flex-1 ml-12 lg:ml-24 lg:text-[80px] font-bold' >UX <span className='text-teal-400'>ENGINEER</span></h1>
<br></br>
<p className='leading-relaxed ml-12 lg:ml-24 text-gray-200 text-lg font-medium ml:text-base'>
Diseñador Multimedia y Desarrollador Frontend MINTIC 🧑‍💻  <br></br> especializado en UX Design, creación de marca y marketing digital<br></br>
Enfocado en tecnologia y diseño para aplicar la creatividad en la ejecución de proyectos
</p>
<br></br>
<div className=' flex  md: items-stretch '>
<a className='' href="https://www.facebook.com/albadam94" target="_blank" rel="noopener noreferrer"><img className='hover:bg-teal-500 rounded-full ml-10 md:ml-24' src={Facebook} alt="facebook" /></a>
<a className=' ' href="https://www.instagram.com/albadam94" target="_blank" rel="noopener noreferrer"><img className='hover:bg-teal-500 rounded-full ml-4' src={Instagram} alt="instagram"/> </a>
<a href="https://www.twitter.com/albadam94" target="_blank" rel="noopener noreferrer"><img className='hover:bg-teal-500 rounded-full ml-4' src={Twitter} alt="twitter" /></a>
<a href="https://www.behance.net/brayanalbadam" target="_blank" rel="noopener noreferrer"><img className='hover:bg-teal-500 ml-4 mt-2' src={Behance} alt="behance" /></a>
<a href="https://www.github.com/albadam94" target="_blank" rel="noopener noreferrer"><img className='hover:bg-teal-500 rounded-full ml-4' src={Github} alt="github" /></a>
<a href="https://www.linkedin.com/in/brayanalbadamvanegas/" target="_blank" rel="noopener noreferrer"><img className='hover:bg-teal-500 ml-4' src={Linkedin} alt="linkedin" /></a>
</div> 
<div id='quiensoy' className=' flex md:ml-24'>
<button className= "max-w-full ml-5 md:ml-10 mt-8 hover:bg-teal-500 text-white font-medium py-3 px-10 rounded-xl shadow-lg" href='mailto:brayanalbadam@gmail.com'>
  Contacto
</button>
<button className="ml-10 md:ml-32 mt-10 boton hover:bg-teal-500 text-white font-medium py-3 px-10 rounded-xl shadow-lg"  role="link"  href="https://drive.google.com/file/d/1WVyGqmGoQ38Ndriqlzjugfe0mMPumoCa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  CV
</button>
</div>
<br></br>
<br></br>
<br></br>
<img    className=' hover:bg-gray-50 ease-in sombra float-right   md:mt-8 mr-20 w-44 m  
md:w-48 xl:w-96 border-teal-500 border-4 rounded-3xl  ' src={Foto} alt='Fotoperfil'/>
<h2 className=' max-w-full ml-24 lg:mt-5 mt-64 text-teal-500 font-medium text-xl data-aos="fade-up"data-aos-easing="linear" data-aos-duration="1000"'>01 Quien Soy</h2>
<p className='h-1 bg-teal-500 w-1/2 mx-24 my-1'></p>

<p className='leading-normal ml-5 lg:ml-24 text-left  text-gray-200 "'>
Hola!! Soy Brayan Albadam diseñador multimedia y desarrollador frontend del diplomado<a href="http://www.misiontic.gov.co" target="_blank" rel="noopener noreferrer"> <span className='text-teal-400'> Misión TIC 2022. </span></a> <br></br>
Tengo experiencia en medios de comunicación, radio y televisión donde participe en la parte tecnica audiovisual;<br></br>
también labore en las emisoras de Todelar Palmira, HopeRadio Colombia y Armonias del Palmar de RCN Radio.<br></br>
Me he desempeñado en comunicación digital, social media, periodismo digital y radio host.<br></br>
</p>
<br></br>
<p  className='leading-relaxed ml-5 lg:ml-24 text-left whitespace-normal break-normal  text-gray-200'>
En el area del diseño he creado la marca para pequeñas y medianas empresas ademas de personas profesionales,<br></br>
me he desempeñado como desarrollador frontend en Wordpress y como lider de implementación de una plataforma<br></br> educativa
para usuarios en centroamerica donde ejecute mis habilidades en Diseño UX y desarrollo frontend.<br></br>

También fui seleccionado como semifinalista del <a href='https://www.infobae.com/america/mexico/2021/04/13/como-va-la-convocatoria-para-crear-el-logotipo-del-aeropuerto-felipe-angeles-que-lanzo-simon-levy/' target="_blank" rel="noopener noreferrer"> <span className='text-teal-400'> concurso </span></a>de rediseño de la marca del aeropuerto Felipe Ángeles de México<br></br><br></br>

Estos son algunos de los software con los que me he desempeñado:<br></br>
</p>

< Slider />

<div className='shadow-lg rounded-sm mt-2 py-3 ml-5 mx-10' >
<h2 className='ml-12 md:ml-24 container max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-10 text-teal-500 font-medium text-xl data-aos="fade-up"data-aos-easing="linear" data-aos-duration="1000"'>02 Formación Academica</h2>
<p className='h-1 bg-teal-500 w-1/2 mx-24 my-1'></p>


<div className=' text-gray-200 ml-1  md:ml-20 text-left'>
<table>
  <tbody>
    <tr>
      <td className='px-2 md:px-6 py-4'>Tecnologo Producción Multimedia</td>
      <td className='px-1 py-5 md:px-6 '>Diplomado programación, Desarrollo de software<br></br> con enfasis en aplicaciones web
                                                  Misión TIC | Universidad Industrial de Santander</td>
    </tr>
    <tr>
      <td className='px-2 md:px-6 py-4'>Certificado profesional Google UX Design</td>
      <td className='px-1 py-4 md:px-6 '>Diseño de experiencia de usuario y consumidor UX-CX<br></br>
      | Universidad San Buenaventura</td>
      
    </tr>
    <tr>
      <td className='px-2 md:px-6 py-4'>Curso comunidades digitales administración de interacciones<br></br>
              en linea | MINTIC</td>
      <td   className='px-1 py-4 md:px-6 '>Certificación periodismo ciudadano recursos para la<br></br> comunicación digital | AppsCO</td>
      
    </tr>
    <tr>
      <td className='px-2 md:px-6 py-4'>Curso introduccion al marketing digital | Platzi-AppsCo</td>
             
      <td className='px-1 py-4 md:px-6 '>Producción de imagenes digitales | SENA</td>
      
    </tr>
    <tr>
      <td className='px-2 md:px-6 py-4'>Curso marketing digital IAB Spain | Google Activate</td>
      <td className='px-1 py-4 md:px-6 '>Fotomontaje publicitario con Adobe Photoshop | Crehana</td>
      
    </tr>
    <tr>
      <td id='experiencia'  className='px-2 md:px-6 py-4'>Curso Desarrollo WEB | Google Activate</td>
      <td className='px-1 py-4 md:px-6 '>Certificación Autocad 2D: Aplicación de herramientas<br></br> intermedias para proyectos CAD | SENA</td>
      
    </tr>
    <tr>
      <td className='px-2 md:px-6 py-4'>Modelado 3D con sketchUp | SENA</td>
      <td className='px-1 py-4 md:px-6 '>Comercio Electronico | Google Activate</td>
      
    </tr>
    <tr>
      <td className='px-2 md:px-6 py-4'>Tecnicas de comunicación a nivel administrativo | SENA</td>
      <td className='px-1 py-4 md:px-6 '>Aplicación del marco de trabajo SCRUM para<br></br> proyectos de desarrollo de software | SENA</td>
    </tr>
  </tbody>
</table>
</div>
</div>
<br></br>

<div className=' shadow-lg rounded-xl  py-5 ml-5 mx-10' >
<h2 className='ml-12 md:ml-24 container max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-10 text-teal-500 font-medium text-xl data-aos="fade-up"data-aos-easing="linear" data-aos-duration="1000"'>03 Experiencia Laboral</h2>
<p className='h-1 bg-teal-500 w-1/2 mx-24 my-1'></p>


<div className='  text-gray-200 relative overflow-x-auto ml-2 md:ml-20 text-left '>
<table>
  <tbody>
    <tr>
      <td className='px-2 md:px-6 py-4'>Productor de audio | Radio Luna Todelar</td>
      <td className='px-1 py-5 md:px-20 '>Coordinador Programa de Opinión De Cuando Acá <br></br>| Armonias del Palmar RCN RADIO</td>
    </tr>
    <tr>
      <td className='px-2 md:px-6 py-4'>Periodista | Contratista comunicaciones<br></br>Alcaldia de Palmira  </td>
      <td className='px-1 py-4 md:px-20 '>Productor de Audio - Community Manager <br></br>| Hope Radio Colombia</td>
    </tr>
    <tr>
      <td className='px-2 md:px-6 py-4'>Periodista Digital | ANC Noticias</td>
      <td className='px-1 py-4 md:px-20 '>Web y Multimedia Developer<br></br> | We Are Angular</td>
    </tr>
    <tr>
      <td className='px-2 md:px-6 py-4'>Gestor de Proyecto TI | Innpulsa-AppsCo-ICESI</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    <br></br>
   <div>
   <h2 className='ml-12 md:ml-24 container max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mt-10 text-teal-500 font-medium text-xl data-aos="fade-up"data-aos-easing="linear" data-aos-duration="1000"'>04 Contacto</h2>
    <p className='h-1 bg-teal-500 w-1/2 mx-20 my-1'></p>
    <p className=' text-center mt-10 text-gray-200'>No dudes en contactar conmigo, cada proyecto es un nuevo desafio para mi,<br></br>
          no existen clientes grandes o pequeños, todos son importantes y todos <br></br>
          reciben un servicio basado en la experiencia y la creatividad.</p>
   </div>
 
    <div className='flex justify-center'>
    <a className="button mt-8 boton hover:bg-teal-500 text-white font-medium py-5  rounded-lg " href='mailto:brayanalbadam@gmail.com'>
        CONTACTAME
    </a>
    
    </div>
    
    <br></br>
    <br></br>
<ScrollButton/>
    <Footer/>
   
</div>



  )
}

export default Inicio