import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

const Experiencia = () => {
  return (
    <>
      <h1 className="text-custom-blue text-5xl font-semibold leading-[56px] md:mx-auto lg:mx-20 xl:mx-36 font-['Archivo'] mt-10">Experiencia</h1>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 font-['Archivo'] mt-20">
          <Accordion isCompact className="flex flex-col p-4 border rounded-lg shadow-md mb-4">
            <AccordionItem className="font-medium"  key="1" title={<span style={{ color: '#083040' }}>Productor de audio</span>} subtitle="Radio Luna" aria-label="Productor de audio">
              <p className="text-sm text-Darkcharcoal font-normal">
                Grabación y edición de programas y comerciales<br />Radio Operador de la emisora afiliada a la cadena radial TODELAR
              </p>
            </AccordionItem>
            <AccordionItem className="font-medium"  key="2" title={<span style={{ color: '#083040' }}>Coordinador programa de opinión De Cuando Acá</span>} subtitle="Armonias del Palmar" aria-label="Coordinador programa de opinión De Cuando Acá">
              <p className="text-sm text-Darkcharcoal font-normal">
                Desempeñé la coordinación del programa de opinión en Radio, me encargué de editar las entrevistas, coordinar las notas para la emisión, también realicé la presentación del programa - Locución.
              </p>
            </AccordionItem>
            <AccordionItem className="font-medium"  key="3" title={<span style={{ color: '#083040' }}>Contratista comunicaciones Alcaldía de Palmira</span>} subtitle="Alcaldía de Palmira" aria-label="Contratista comunicaciones Alcaldía de Palmira">
              <p className="text-sm text-Darkcharcoal font-normal">
                Difusión de los planes y proyectos que adelantó la administración en un programa de radio | contrato 1473-2018
              </p>
            </AccordionItem>
            <AccordionItem className="font-medium"  key="4" title={<span style={{ color: '#083040' }}>Community manager-Productor de audio </span>} subtitle="Hope Radio" aria-label="Community manager-Radio operador">
              <p className="text-sm text-Darkcharcoal font-normal">
                Grabación y edición de programas, social media, locución
              </p>
            </AccordionItem>
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
              Prestación de servicios en consultoría UX, diseño de experiencia de usuario, creación de marca para empresas, profesionales e instituciones, ayudando a escalar y comprender las necesidades de los usuarios mediante el diseño de productos y servicios digitales.
              ● Diseño de marca y de empaque Ecocomfort, empresa de productos para el hogar de fabricación artesanal
              ● Diseño UX/UI de la app web Playme del sector entretenimiento de contenidos, Diseño de flujos, diseño UI, UI KIT, diseño de componentes, diseño de banners, diseño paginas de perfil, pagina de carga de contenidos, diseño de dashboard de estadísticas y pagos. <a href="https://playme.us"target="_blank"
              rel="noopener noreferrer" className="text-sky-400 font-bold underline"> Proyecto playme.us</a>
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Experiencia;
