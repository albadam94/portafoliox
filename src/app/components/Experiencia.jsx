import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";



const Experiencia = () => {
  return (
    <div>

        <h1 className="text-custom-teal text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-semibold font-['Inter'] leading-[56px] md:mx-12 lg:mx-20 xl:mx-80 mt-10 lg:mt-20">
                Experiencia
        </h1>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
    <Accordion isCompact className="flex flex-col h-full p-4 border rounded-lg shadow-md text-lg font-medium mb-4">
      <AccordionItem className="text-xl font-medium mb-2" key="1" aria-label="Productor de audio | Radio Luna" title={<span style={{ color: '#16BDCA' }}>Productor de audio</span>}>
        <p className="text-sm font-normal">Grabación y edición de programas y comerciales<br/>Radio Operador de la emisora afiliada a la cadena radial TODELAR</p>
      </AccordionItem>
      <AccordionItem className="text-xl font-medium mb-2" key="2" aria-label="Coordinador Programa de Opinión De Cuando Acá | Armonias del Palmar RCN Radio"  title={<span style={{ color: '#16BDCA' }}>Coordinador Programa de Opinión De Cuando Acá | Armonias del Palmar RCN Radio</span>}>
        <p className="text-sm font-normal">Desempeñe la coordinación del programa de opinión en Radio, me encargue de editar las entrevistas, coordinar las notas para la emisión, realice también la presentación del programa - Locución.</p>
      </AccordionItem>
      </Accordion>

      <Accordion isCompact className="flex flex-col h-full p-4 border rounded-lg shadow-md text-lg font-medium mb-4">
      <AccordionItem className="text-xl font-medium mb-2" key="1" aria-label="Periodista | Contratista comunicaciones Alcaldia de Palmira" title={<span style={{ color: '#16BDCA' }}>Periodista | Contratista comunicaciones Alcaldia de Palmira</span>}>
      <p className="text-sm font-normal">Contratista Alcaldía Municipal de Palmira<br/> -Difusión de los planes y proyectos que adelanto la administración en un programa de radio | contrato 1473-2018</p>
      </AccordionItem>
      <AccordionItem className="text-xl font-medium mb-2" key="2" aria-label="Productor de Audio - Community Manager | Hope Radio Colombia" title={<span style={{ color: '#16BDCA' }}>Productor de Audio - Community Manager | Hope Radio Colombia</span>}>
        <p className="text-sm font-normal">Desempeñe la labor de realizar la edición y grabación de comerciales, programas radiales, realizar la programación de la emisora, manejo de Facebook Live mediante OBS con caracteres para emitir programas en vivo, realice la creación de la fanpage de la emisora y su respectiva administración atendiendo a los seguidores brindando respuesta en la misma pagina o por WhatsApp..</p>
      </AccordionItem>
      </Accordion>


      <Accordion isCompact className="flex flex-col h-full p-4 border rounded-lg shadow-md text-lg font-medium mb-4">
      <AccordionItem className="text-xl font-medium mb-2" key="1" aria-label="Periodista Digital | ANC Noticias"  title={<span style={{ color: '#16BDCA' }}>Periodista Digital | ANC Noticias</span>}>
        <p className="text-sm font-normal">Realice la creación de la pagina de noticias ANC NOTICIAS con el fin de brindar información en noticias a nivel local, nacional e internacional, logrando un alcance hasta de 30.000 personas y alcanzar un 
        aproximado de 9500 seguidores en Facebook implementando al principio estrategias de marketing segmentadas en ciudades como Palmira, Cali, Medellín y Bogotá para posteriormente lograr un alcance orgánico .</p>
      </AccordionItem>
      <AccordionItem className="text-xl font-medium mb-2" key="2" aria-label="UX Engineer | We Are Angular"  title={<span style={{ color: '#16BDCA' }}>UX Engineer | We Are Angular</span>}>
        <p className="text-sm font-normal">- Diseño y desarrollo de landings page en Wordpress <br/>- Lider implementación Frontend de LMS en CANVAS para un proyecto de educación en agricultura para usuarios en 
    paises de San Salvador, Honduras y Guatemala; Diseño Experiencia de usuario UX, Obtención de datos con API y CSV, Creación de modulos, Registros CSV, implementación HTML y CSS.
    -Realice pruebas de usabilidad con el equipo de Learning Experience para conocer la interactividad de los usuarios con la aplicación.<br/>  
    -Realice los diseños de UX Flow, UX Task, casos de uso del sistema PRM de aprendizaje y de cada uno de los cursos. <br/>
    -Brinde apoyo en el diseño UI y prototipado realizando modificaciones en las interfaces de los cursos e implementandolos en la aplicación mediante codigo HTML y CSS tanto para agricultores como Extensionistas</p>
      </AccordionItem>
      </Accordion>

      <Accordion isCompact className="flex flex-col h-full p-4 border rounded-lg shadow-md text-lg font-medium mb-4">
      <AccordionItem className="text-xl font-medium mb-10" key="1" aria-label="Project Manager | Innpulsa-AppsCo-ICESI" title={<span style={{ color: '#16BDCA' }}>Project Manager | Innpulsa-AppsCo-ICESI</span>}>
      <p className="text-sm font-normal">Líder de proyecto Mid Level, encargado de gestionar las actividades necesarias que debian realizar los diseñadores y desarrolladores, para ser entregados en los tiempos establecidos los 74 productos mínimos viables que hicieron parte del Ciclo 2 del Proyecto Apps.Co- Fase Producto Digital.</p>
      </AccordionItem>
      </Accordion>
   
      
        </div>
    </div>



    </div>
  )
}

export default Experiencia