import React from "react";
import Perfil from '../Images/Foto.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



function Presentacion( ){
    
   return( 
       
       <div className="container-fluid">
       <div id="inicio">
   
       
<br></br><br></br>
           <h3 className="saludo" >Hola me llamo</h3>
           <h1 className="text-start">BRAYAN ALBADAM</h1>
           <h1 className="cargo">DISEÑADOR<span className="green"> MULTIMEDIA</span></h1>
           <p className="enfoque">Soy Diseñador Multimedia y Desarrollador Web MINTIC 👨‍💻
           <br></br>especializado en creación de marcas, diseño Web, Ux/Ui y Marketing Digital
           <br></br>Enfocado en tecnologia y diseño, aplicando creatividad en la ejecución de proyectos.
           </p>
           <button className="correo" onClick={( ) => window.location='mailto:brayanalbadam@yahoo.com'}>CONTACTO</button>
           <a className="cv" href="https://drive.google.com/file/d/1NpszMZ-FZMmAxQNMcMuR0yytxGVaXkh5/view?usp=share_link" target="_blank" rel="noopener noreferrer"><strong className="Resalto">CV</strong></a>
           <div id="Quiensoy" >
               <h1 className="acerca" id="Quiensoy" data-aos="fade-up"data-aos-easing="linear" data-aos-duration="1000" >01. Quien Soy</h1>
               <hr className="linea"></hr>
               
                   
               
                   <img className=" fotoPerfil" data-aos="fade-down"data-aos-easing="linear" data-aos-duration="800" src={Perfil}  alt="FotoPerfil"></img>
                   <p className="presentacion text-right"data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1000" >
                   Hola!! soy <strong >Brayan Albadam</strong> Diseñador Multimedia y Front-End Developer.
                   <br></br>del programa <a href="http://www.misiontic.gov.co" target="_blank" rel="noopener noreferrer"><strong className="Resalto" >Misión TIC 2022</strong></a>. Tengo experiencia en medios de comunicación, radio y 
                   <br></br>televisión, he colaborado en la parte tecnica de canales locales como CNC Palmira, Canal
                   <br></br>Telepalmar; También he laborado en Emisoras como Radio Luna de Todelar, 
                   <br></br>Armonias del Palmar de RCN Radio y Hope Radio Colombia.
                   <br></br>
                   <br></br>
                   También me he desempeñado en las areas de comunicación digital, periodismo digital,<br></br>
                   administración de contenido, periodismo en radio y TV Host.<br></br>
                   En el area de diseño he realizado las marcas para pequeñas y medianas empresas <br></br> personas profesionales.
                   <br></br>También fui seleccionado como semifinalista en el <a href="https://www.infobae.com/america/mexico/2021/04/13/como-va-la-convocatoria-para-crear-el-logotipo-del-aeropuerto-felipe-angeles-que-lanzo-simon-levy/" target="_blank" rel="noopener noreferrer"><strong className="Resalto" >concurso</strong></a> de rediseño del logo del <br></br>aeropuerto de México Felipe Ángeles.
                   <br></br>
                   Estos son algunos programas con los que he trabajado:
                   <br></br>
                   <br></br>
   
   
   
               </p>
           </div>
           <div className="tabla "data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1000" >
               <table className="table  table-borderless table-responsive">
                   <thead className="table-md ">
                       <tr>
                           <th scope="row">Adobe Illustrator</th>
                           <th scope="row">Adobe Photoshop</th>
                           <th scope="row">HTML</th>
                       </tr>
                   </thead>
                   <tbody class=" table-md">
                       <tr>
                           <th scope="row">Adobe Premiere Pro</th>
                           <th scope="row">Adobe Audition</th>
                           <th scope="row">CSS</th>
                       </tr>
                       <tr>
                           <th scope="row">Adobe XD</th>
                           <th scope="row">Adobe LightRoom</th>
                           <th scope="row">Bootstrap</th>
                       </tr>
                       <tr>
                           <th scope="row">Autocad</th>
                           <th scope="row">Sketchup</th>
                           <th scope="row">React</th>
                       </tr>
                       <tr>
                           <th scope="row">Lumion</th>
                           <th scope="row">Figma</th>
                           <th scope="row">Wordpress</th>
                       </tr>
                       </tbody>
               </table>
               </div>
               

               <h1 className="acerca2 " id="Estudios"data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1000">02.Formacion Academica</h1>
               <hr className="linea"></hr>
               <div className="tabla2 "data-aos="fade-up"data-aos-easing="linear" data-aos-duration="1000">
                   <table className="table  table-borderless table-responsive">
                      <tbody className=" table-md tabla2">
                           <tr>
                               <th scope="row">Tecnologo Producción Multimedia</th>
                               <th scope="row">Diplomado Programacion, Desarrollo de software con enfasis en aplicaciones WEB Mision TIC
                               | Universidad Industrial de Santander</th>
                               </tr>
                           <tr>
                               <th scope="row">Curso Marketing Digital IAB Spain | Google Activate</th>
                               <th scope="row">Diseño Ux: Experiencia de usuario Ux/Ui</th>
                               </tr>
                           <tr>
                               <th scope="row">Curso comunidades digitales administración de interacciones en linea MINTIC</th>
                               <th scope="row">Certificación periodismo ciudadano recursos para la comunicación digital</th>
                               </tr>
                           <tr>
                               <th scope="row">Curso introduccion al marketing digital Platzi-AppsCo</th>
                               <th scope="row">Producción de imagenes digitales</th>
                           </tr>
                           <tr>
                               <th scope="row">Curso diseño de logos | Crehana</th>
                               <th scope="row">Fotomontaje publicitario con Adobe Photoshop | Crehana</th>
                           </tr>
                           <tr>
                               <th scope="row">Curso Desarrollo WEB | Google Activate</th>
                               <th scope="row">Certificación Autocad 2D: Aplicación de herramientas intermedias para proyectos CAD</th>
                           </tr>
                           <tr>
                               <th scope="row">Modelado 3D con sketchUp</th>
                               <th scope="row">Comercio Electronico | Google Activate</th>
                             
                           </tr>
                           <tr>
                           <th scope="row">Tecnicas de comunicación a nivel administrativo</th>
                           <th scope="row">Aplicación del marco de trabajo SCRUM para proyectos de desarrollo de software</th>
                           </tr>
                           </tbody>
                   </table>
   
                   </div>
                   <h1 className="acerca2" id="Experiencia"data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1000">03.Experiencia Laboral</h1>
                   <hr className="linea"></hr>
                   <div className="tabla2"data-aos="fade-up"data-aos-easing="linear" data-aos-duration="1000">
                       <table className="table  table-borderless table-responsive">
                            <tbody className=" table-md tabla2">
                                   <tr>
                                       <th scope="row">Productor de audio | Radio Luna Todelar</th>
                                       <th scope="row">Coordinador Programa de Opinión De Cuando Acá | Armonias del Palmar RCN RADIO </th>
                                   </tr>
                                   <tr>
                                       <th scope="row">Contratista Alcaldia de Palmira | Periodista</th>
                                       <th scope="row">Productor de Audio - Community Manager | Hope Radio Colombia </th>
                                   </tr>
                                   <tr>
                                       <th scope="row">Periodista Digital | ANC Noticias</th>
                                       <th scope="row">Web y Multimedia Developer | We Are Angular</th>
                                    </tr>  
                                    <tr>
                                       <th scope="row">Gestor de Proyecto TI | Innpulsa-AppsCo-ICESI</th>
                                       
                                    </tr>   
                                    </tbody>
                       </table>
                 </div>  
                 <h1 className="acerca2" id="contacto">04.Contacto</h1>
                 <hr className="linea"></hr>
                 <p className="contacto text-center">No dudes en contactar conmigo, cada proyecto es un nuevo desafio para mi, <br></br>
                 no existen clientes grandes o pequeños, todos son importantes y todos <br></br>
                 reciben un servicio basado en la experiencia y la creatividad.<br></br><br></br>
                 Con un trato amable y cercano tratare de ser tu socio en busca de la mejor solucion de diseño o desarrollo <br></br>
                 para tu proyecto o empresa.<br></br><br></br>
                 <a className="boton btn btn-light" href="mailto:brayanalbadam@yahoo.com">Contáctame</a><br></br><br></br>
                 <br></br><br></br>
     
                
                 </p>    
                
</div>




       </div>
       
   )
}

export default Presentacion;