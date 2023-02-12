import React from 'react'
import Footer from '../components/Footer'
import Foto from '../images/Perfil.png'
import Facebook from '../Icons/Facebook.svg'
import Instagram from '../Icons/Instagram.svg'
import Twitter from '../Icons/twitter.svg'
import Behance from '../Icons/Behance.svg'
import Github  from '../Icons/Git.svg'
import Linkedin from '../Icons/linkedin.svg'
import Slider from '../components/Slider'

const Inicio = () => {
  return (
<div>
<h3 className='ml-24  mt-16 text-teal-400 text-lg font-medium' >Hola me llamo</h3>
<br></br>
<h1 className=' md:text-4xl lg:text-7xl ml-24 text-gray-200 text-[80px] font-bold animate-text'>BRAYAN ALBADAM</h1>
<h1 className='text-gray-200 lg:text-7xl ml-24 text-[80px] font-bold' >DISEÑADOR <span className='text-teal-400'>MULTIMEDIA</span></h1>
<br></br>
<p className='leading-relaxed ml-24 text-gray-200 text-lg font-medium ml:text-base'>
Diseñador Multimedia y Desarrollador Frontend MINTIC 🧑‍💻  <br></br> especializado en diseño Ux/Ui, creación de marca y marketing digital<br></br>
Enfocado en tecnologia y diseño para aplicar la creatividad en la ejecución de proyectos
</p>
<br></br>
<div className='flex items-stretch'>
<img className='ml-24' src={Facebook} alt="facebook" />
<img className='ml-4' src={Instagram} alt="instagram" />
<img className='ml-4' src={Twitter} alt="twitter" />
<img className='ml-4' src={Behance} alt="behance" />
<img className='ml-4' src={Github} alt="github" />
<img className='ml-4' src={Linkedin} alt="linkedin" />
</div> 
<div className='flex flex-row'>
<button class= "ml-40 mt-8 boton hover:bg-teal-500 text-white font-medium py-3 px-8 rounded-xl shadow-lg" role="link" onClick={()=> window.location='mailto:brayanalbadam@gmail.com'}>
  Contacto
</button>
<button class="ml-32 mt-8 boton hover:bg-teal-500 text-white font-medium py-3 px-8 rounded-xl shadow-lg"  role="link" ><a href="https://drive.google.com/file/d/1NpszMZ-FZMmAxQNMcMuR0yytxGVaXkh5/view?usp=share_link" target="_blank" rel="noopener noreferrer">
  CV</a>
</button>
</div>
<br></br>
<br></br>
<br></br>

<h2 className='ml-24 text-teal-500 font-medium text-xl'>01 Quien Soy</h2>
<hr className='h-1 bg-teal-500 w-1/2 mx-24 my-1'></hr>
<img className='hover:bg-gray-400 ease-in sombra float-right mr-20 w-20 md:w-32 lg:w-48 xl:w-96 border-teal-500 border-4 rounded-3xl  ' src={Foto} alt='Fotoperfil'/>
<p className='leading-relaxed ml-24 text-left whitespace-normal break-normal md:break-all text-gray-200'>
Hola!! Soy Brayan Albadam diseñador multimedia y desarrollador frontend del diplomado<a href="http://www.misiontic.gov.co" target="_blank" rel="noopener noreferrer"> <span className='text-teal-400'> Misión TIC 2022. </span></a> <br></br>
Tengo experiencia en medios de comunicación, radio y televisión donde participe en la parte tecnica audiovisual, <br></br>
también labore en las emisoras de Todelar Palmira, HopeRadio Colombia y Armonias del Palmar de RCN Radio.<br></br>
Me he desempeñado en comunicación digital, social media, periodismo digital y radio host.<br></br>
</p>
<br></br>
<p className='leading-relaxed ml-24 text-left whitespace-normal break-normal md:break-all text-gray-200'>
En el area del diseño he creado la marca para pequeñas y medianas empresas ademas de personas profesionales,<br></br>
me he desempeñado como desarrollador frontend en Wordpress y de implementación de una plataforma educativa<br></br>
para usuarios en centroamerica donde enfoque mis habilidades en Diseño Ux y desarrollo.<br></br>

También fui seleccionado como semifinalista del concurso de rediseño de la marca del aeropuerto Felipe Ángeles de México<br></br><br></br>

Estos son algunos de los programas con los que me he desempeñado:<br></br>
</p>

<Slider />

<div className='shadow-lg rounded-xl py-6 mx-10' >
<h2 className='ml-24 text-teal-500 font-medium text-xl'>02 Formación Academica</h2>
<hr className='h-1 bg-teal-500 w-1/2 mx-24 my-1'></hr>


<div className=' text-gray-200 relative overflow-x-auto ml-40 text-left'>
<table>
  <tbody>
    <tr>
      <td className='px-6 py-4'>Tecnologo Producción Multimedia</td>
      <td className='px-6 py-4'>Diplomado programación, Desarrollo de software con enfasis en aplicaciones web<br></br>
                                                  Misión TIC | Universidad Industrial de Santander</td>
    </tr>
    <tr>
      <td className='px-6 py-4'>Curso marketing digital IAB Spain | Google Activate</td>
      <td className='px-6 py-4'>Diseño Ux: Experiencia de usuario Ux/Ui + Figma | Udemy</td>
      
    </tr>
    <tr>
      <td className='px-6 py-4'>Curso comunidades digitales administración de interacciones<br></br>
              en linea | MINTIC</td>
      <td className='px-6 py-4'>Certificación periodismo ciudadano recursos para la comunicación digital | AppsCO</td>
      
    </tr>
    <tr>
      <td className='px-6 py-4'>Curso introduccion al marketing digital | Platzi-AppsCo</td>
             
      <td className='px-6 py-4'>Producción de imagenes digitales | SENA</td>
      
    </tr>
    <tr>
      <td className='px-6 py-4'>Curso diseño de marca | Crehana</td>
      <td className='px-6 py-4'>Fotomontaje publicitario con Adobe Photoshop | Crehana</td>
      
    </tr>
    <tr>
      <td className='px-6 py-4'>Curso Desarrollo WEB | Google Activate</td>
      <td className='px-6 py-4'>Certificación Autocad 2D: Aplicación de herramientas intermedias para proyectos CAD | SENA</td>
      
    </tr>
    <tr>
      <td className='px-6 py-4'>Modelado 3D con sketchUp | SENA</td>
      <td className='px-6 py-4'>Comercio Electronico | Google Activate</td>
      
    </tr>
    <tr>
      <td className='px-6 py-4'>Tecnicas de comunicación a nivel administrativo | SENA</td>
      <td className='px-6 py-4'>Aplicación del marco de trabajo SCRUM para proyectos de desarrollo de software | SENA</td>
    </tr>
  </tbody>
</table>
</div>
</div>
<br></br>

<div className=' shadow-lg rounded-xl py-6 mx-10' >
<h2 className='ml-24  text-teal-500 font-medium text-xl'>03 Experiencia Laboral</h2>
<hr className='h-1 bg-teal-500 w-1/2 mx-24 my-1'></hr>


<div className=' text-gray-200 relative overflow-x-auto ml-40 '>
<table>
  <tbody>
    <tr>
      <td className='px-6 py-4'>Productor de audio | Radio Luna Todelar</td>
      <td className='px-10 py-5'>Coordinador Programa de Opinión De Cuando Acá | Armonias del Palmar RCN RADIO</td>
    </tr>
    <tr>
      <td className='px-6 py-4'>Periodista | Contratista comunicaciones<br></br>Alcaldia de Palmira  </td>
      <td className='px-10 py-4'>Productor de Audio - Community Manager | Hope Radio Colombia</td>
    </tr>
    <tr>
      <td className='px-6 py-4'>Periodista Digital | ANC Noticias</td>
      <td className='px-10 py-4'>Web y Multimedia Developer | We Are Angular</td>
    </tr>
    <tr>
      <td className='px-6 py-4'>Gestor de Proyecto TI | Innpulsa-AppsCo-ICESI</td>
    </tr>
    </tbody>
    </table>
    </div>
    </div>
    <br></br>
   <div>
   <h2 className=' ml-36 text-teal-500 font-medium text-xl my-1'>04 Contacto</h2>
    <hr className='h-1 bg-teal-500 w-1/2 mx-24 my-1'></hr>
    <p className=' text-center mt-10 text-gray-200'>No dudes en contactar conmigo, cada proyecto es un nuevo desafio para mi,<br></br>
          no existen clientes grandes o pequeños, todos son importantes y todos <br></br>
          reciben un servicio basado en la experiencia y la creatividad.</p>
   </div>
 
    <div className='flex justify-center'>
    <button className="button mt-8 boton hover:bg-teal-500 text-white font-medium py-5  rounded-lg " role="link" onClick={()=> window.location='mailto:brayanalbadam@gmail.com'}>
        CONTACTAME
    </button>
    </div>
    <br></br>
    <br></br>
    <Footer/>
</div>



  )
}

export default Inicio