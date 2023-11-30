import React from 'react'
import Image from 'next/image'
import Perfil from 'public/Perfil.png'



const Quiensoy = () => {
  return (
    <div>
            <div className="mt-14 md:mt-20 lg:mt-32 xl:mt-64 " >
   
        
   <h1 className="text-white text-5xl font-semibold font-Rubik leading-[56px] md:mx-12 lg:mx-20 xl:mx-80 ">
     Acerca de <span className="text-custom-teal">mi</span>
   </h1>

   <div className="">
     <Image src={Perfil} alt="Brayan Albadam" width={400} height={400} className="float-right ml-24 mr-1 mt-5  sm:mr-20  rounded-2xl shadow border-2 border-cyan-500  lg:w-96 w-screen mb-9 " />
   </div> 

   <div className="text-white text-base font-normal font-['Rubik'] leading-normal  xl:mx-80 mt-10 md:w-[612px] w-fit ">
     <p>
       Soy Brayan Albadam, diseñador multimedia y desarrollador frontend del diplomado Misión TIC 2022. Certificado profesionalmente en diseño de experiencia de usuario por{' '}
       <a
         href="https://www.coursera.org/programs/diseno-de-experiencia-de-usuario-iiehw/professional-certificates/diseno-de-experiencia-del-usuario-ux-de-google"
         className="text-custom-teal font-bold underline"
         target="_blank"
         rel="noopener noreferrer"
       >
         Google
       </a>{' '}
       y diseño de experiencia de usuario y consumidor de la Universidad San Buenaventura Calí.
     </p>

     <p className="mt-4">
       En el ámbito del diseño, he creado marcas para pequeñas y medianas empresas, así como para profesionales de diversas disciplinas.
     </p>

     <p className="mt-4">
       Me desempeñé como desarrollador frontend en WordPress y como UX Engineer en la implementación de una plataforma educativa en CANVAS, dirigida a usuarios de Centroamérica, donde adquirí y apliqué habilidades en diseño UX y desarrollo Frontend.
     </p>

     <p className="mt-4">
       También me desempeñé como Project Manager en un proyecto con el Ministerio TIC, AppsCO y la Universidad ICESI. Me encargué de gestionar las actividades necesarias que debían realizar los diseñadores y desarrolladores para ser entregados en los tiempos establecidos los 74 productos mínimos viables que hicieron parte del Ciclo 2 del Proyecto Apps.Co- Fase Producto Digital.
     </p>

     <p className="mt-4">
       Además, fui seleccionado como semifinalista en el{' '}
       <a
         href="https://www.infobae.com/america/mexico/2021/04/13/como-va-la-convocatoria-para-crear-el-logotipo-del-aeropuerto-felipe-angeles-que-lanzo-simon-levy/"
         className="text-custom-teal font-bold underline"
         target="_blank"
         rel="noopener noreferrer"
       >
         concurso
       </a>{' '}
       de rediseño de la marca del Aeropuerto Felipe Ángeles de México y también participé en el reto de diseño de experiencia de usuario de Bancolombia Bank Design 2023.
     </p>

     <p className="mt-4">
       Anteriormente, adquirí valiosa experiencia en medios de comunicación, incluyendo radio y televisión, donde participé en aspectos técnicos audiovisuales. Mi trayectoria incluye emisoras como Todelar Palmira, HopeRadio Colombia y Armonías del Palmar de RCN Radio.
     </p>

     <p className="mt-4">
       Tengo experiencia en comunicación digital y social media. A lo largo de mi carrera, he cultivado habilidades en la creación de conceptos de diseño, investigación de usuarios y establecimiento de marcos de productos mediante el uso de prototipos.
     </p>

     <p className="mt-4">
       Con enfoque centrado en el diseño, diseño las experiencias más increíbles para los usuarios.
     </p>
   </div>
    </div>

    </div>
  )
}

export default Quiensoy