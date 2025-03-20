import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

const Experiencia = () => {
  return (
    <>
      <h1 className="text-custom-blue text-5xl font-semibold leading-[56px] md:mx-auto lg:mx-20 font-['Geist'] mt-10 xl:mx-[-120px]">Experiencia</h1>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 font-['Geist'] mt-20">
          <Accordion isCompact className="flex flex-col p-4 border rounded-lg shadow-md mb-4">
            <AccordionItem className="font-medium"  key="5" title={<span style={{ color: '#083040' }}>Diseñador UX/UI-Desarrollador Frontend</span>} subtitle="We Are Angular" aria-label="UX Engineer">
              <p className="text-sm text-Darkcharcoal font-normal">
                Diseño y desarrollo de landings page e ecommerce en Wordpress<br /><br></br>
                Lideré la implementación Frontend de un LMS en CANVAS para un proyecto de educación en agricultura para usuarios en países de San Salvador, Honduras y Guatemala; Diseño Experiencia de usuario UX, Obtención de datos con API y CSV, Creación de módulos, Registros CSV, implementación HTML y CSS.<br /><br></br>
                Realicé pruebas de usabilidad con el equipo de Learning Experience para conocer la interactividad de los usuarios con la aplicación.<br /><br></br>
                Realicé los diseños de UX Flow, UX Task, casos de uso del sistema PRM de aprendizaje y de cada uno de los cursos y brinde apoyo en el diseño UI en la creación de banners y demas elementos visuales.<br /><br></br>
                Brindé apoyo en el diseño UI y prototipado realizando modificaciones en las interfaces de los cursos e implementándolos en la aplicación mediante código HTML y CSS tanto para agricultores como Extensionistas en la plataforma de CANVAS LMS.
              </p>
            </AccordionItem>
            <AccordionItem className="font-medium"  key="6" title={<span style={{ color: '#083040' }}>Project Manager</span>} subtitle="Ministerio de tecnologías de información y comunicaciones | Innpulsa | Universidad ICESI" aria-label="Project Manager">
              <p className="text-sm text-Darkcharcoal font-normal">
                Líder de proyecto Mid Level, encargado de gestionar las actividades necesarias que debían realizar los diseñadores y desarrolladores, para entregar en los tiempos establecidos los 74 productos mínimos viables que hicieron parte del Ciclo 2 del Proyecto Apps.Co- Fase Producto Digital.
              </p>
            </AccordionItem>
            <AccordionItem className="font-medium"  key="7" title={<span style={{ color: '#083040' }}>Freelance</span>} subtitle="Independiente" aria-label="Freelance">
              <p className="text-sm text-Darkcharcoal font-normal">
              Prestación de servicios en consultoría UX, diseño de experiencia de usuario, creación de marca para empresas, profesionales e instituciones, ayudando a escalar y comprender las necesidades de los usuarios mediante el diseño de productos y servicios digitales.<br /><br></br>
              Diseño de marca y de empaque Ecocomfort, empresa de productos para el hogar de fabricación artesanal<br /><br></br>
              Diseño UX/UI de la app web Playme del sector entretenimiento de contenidos, Diseño de flujos, diseño UI, UI KIT, diseño de componentes, diseño de banners, diseño paginas de perfil, pagina de carga de contenidos, diseño de dashboard de estadísticas y pagos. <a href="https://playme.us"target="_blank"
              rel="noopener noreferrer" className="text-sky-400 font-bold underline"> Proyecto playme.us</a>
              </p>
            </AccordionItem>
            <AccordionItem className="font-medium"  key="8" title={<span style={{ color: '#083040' }}>Product Designer</span>} subtitle="Innovative MOJO" aria-label="Product Designer">
              <p className="text-sm text-Darkcharcoal font-normal">
              Realizar investigaciones de usuarios, pruebas de usabilidad y análisis de datos para comprender el comportamiento de la audiencia e informar las decisiones de diseño.<br /><br></br>
              Desarrollar perfiles de usuario, mapas de viaje y wireframes para garantizar una comprensión completa de las necesidades y comportamientos de los usuarios.<br /><br></br>
              Crear prototipos interactivos que articulen claramente el flujo y la funcionalidad de los productos digitales.<br /><br></br>
              Diseñar interfaces visualmente atractivas que se alineen con la identidad de la marca y los objetivos de marketing.<br /><br></br>
              Desarrollar sistemas de diseño, guías de estilo y bibliotecas de componentes para mantener la coherencia en todos los puntos de contacto digitales.<br /><br></br>
              Colaborar con los desarrolladores para garantizar que la integridad del diseño se mantenga durante la fase de desarrollo.

              
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Experiencia;
